import { Product } from "store/bag/reducer";
import { FilterState } from "store/filter/reducer";
const excludeColumns = ["id", "images"];

export default (products: Product[], { filters, sortBy }: { filters: FilterState; sortBy: string }) => {
  return products
    .filter((product) => {
      const { price, color, discountRange, gender, text } = filters;
      let genderMatch = true;

      if (!!gender) {
        genderMatch = product.gender.toLowerCase() === gender.toLowerCase();
      }
      const lowercasedValue = text.toLowerCase().trim();
      let textMatch = false;
      if (!!lowercasedValue) {
        const filteredData = Object.keys(product).some((key: any) => {
          const currentKey = product[key as keyof Product];
          return excludeColumns.includes(key) ? false : currentKey!.toString().toLowerCase().includes(lowercasedValue);
        });
        textMatch = filteredData;
      } else {
        textMatch = true;
      }

      let discountRangeMatch = true;
      if (!!discountRange) {
        discountRangeMatch = product.discountPercent >= discountRange;
      }

      let priceMatch = false;
      for (let item of price) {
        const [start, end] = item.split("-");
        console.log(start, end);
        if (product.price >= parseInt(start) && product.price < parseInt(end)) priceMatch = true;
      }
      priceMatch = price.length > 0 ? priceMatch : true;

      let colorMatch = true;
      if (color.length > 0) {
        colorMatch = color.some((item) => product.color.includes(item.toUpperCase()));
      }

      return genderMatch && priceMatch && discountRangeMatch && colorMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "NEW") {
        return a.postedAt < b.postedAt ? 1 : -1;
      }
      if (sortBy === "POPULAR") {
        return a.rating < b.rating ? 1 : -1;
      }
      if (sortBy === "BETTER_DISCOUNT") {
        return a.discountPercent < b.discountPercent ? 1 : -1;
      }
      if (sortBy === "PRICE_HIGH_TO_LOW") {
        return a.price < b.price ? 1 : -1;
      }
      if (sortBy === "PRICE_LOW_TO_HIGH") {
        return a.price < b.price ? -1 : 1;
      } else return 1;
    });
};
