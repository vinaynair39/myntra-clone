import React, { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { Checkbox } from "antd";

import "./FilterBar.scss";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { filterColors } from "utils/filterColors";
import { useDispatch } from "react-redux";
import { setGenderFilter, setDiscountRangeFilter, setCategoriesFilter, setColorFilter, setPriceFilter } from "store/filter/reducer";

interface Props {}
const FilterBar: React.FC<Props> = ({}) => {
  const [gender, setGender] = useState<"MEN" | "WOMEN" | "BOYS" | "GIRLS" | null>(null);
  const [categories, setCategories] = useState<CheckboxValueType[] | null>(null);
  const [colors, setColors] = useState<CheckboxValueType[] | null>(null);
  const [discountRange, setDiscountRange] = useState<number | null>(null);
  const dispatch = useDispatch();

  const onGenderChange = (e: RadioChangeEvent) => {
    setGender(e.target.value);
    dispatch(setGenderFilter(e.target.value));
  };

  const onDiscountRangeChange = (e: RadioChangeEvent) => {
    setDiscountRange(e.target.value);
    dispatch(setDiscountRangeFilter(e.target.value));
  };

  const onCategoriesChange = (checkedValues: CheckboxValueType[]) => {
    setCategories(checkedValues);
    dispatch(setCategoriesFilter(checkedValues));
  };
  const onColorsChange = (checkedValues: CheckboxValueType[]) => {
    setColors(checkedValues);
    dispatch(setColorFilter(checkedValues));
  };

  const onPriceChange = (checkedValues: CheckboxValueType[]) => {
    // let bigestRange: number[] = [];
    // for (let item of checkedValues) {
    //   const stringItem = item.toString();
    //   const [start, end] = stringItem.split("-");
    //   if (bigestRange.length === 0) {
    //     bigestRange = [parseInt(start), parseInt(end)];
    //   } else {
    //     const intStart = parseInt(start);
    //     const intEnd = parseInt(end);
    //     if (bigestRange[0] > intStart) bigestRange[0] = intStart;
    //     if (bigestRange[1] < intEnd) bigestRange[1] = intEnd;
    //   }
    // }
    // dispatch(setPriceFilter(bigestRange));

    dispatch(setPriceFilter(checkedValues));
  };

  return (
    <div className={"filterBar"}>
      <div className={"gender padding borderBottom"}>
        <Radio.Group onChange={onGenderChange} value={gender} size="small">
          <Radio value={"MALE"}>Men</Radio>
          <Radio value={"FEMALE"}>Women</Radio>
          <Radio value={"BOYS"}>Boys</Radio>
          <Radio value={"GIRLS"}>Girls</Radio>
        </Radio.Group>
      </div>
      {/* <div className="categories padding borderBottom">
        <h2>CATEGORIES</h2>
        <Checkbox.Group onChange={onCategoriesChange}>
          <Checkbox value={"SHIRTS"}>Shirts</Checkbox>
          <Checkbox value={"SLEEP SHIRTS"}>Sleep Shirts</Checkbox>
        </Checkbox.Group>
      </div> */}
      <div className="categories padding borderBottom">
        <h2>Price</h2>
        <Checkbox.Group onChange={onPriceChange}>
          <Checkbox value={"374-1531"}>Rs. 374 to Rs. 1531</Checkbox>
          <Checkbox value={"1531-2688"}>Rs. 1531 to Rs. 2688</Checkbox>
          <Checkbox value={"2688-3845"}>Rs. 2688 to Rs. 3845</Checkbox>
          <Checkbox value={"3845-5002"}>Rs. 3845 to Rs. 5002</Checkbox>
        </Checkbox.Group>
      </div>
      <div className="colors padding borderBottom">
        <h2>Colors</h2>
        <Checkbox.Group onChange={onColorsChange}>
          {filterColors.map((item) => {
            return (
              <Checkbox value={item.name} style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <p style={{ backgroundColor: item.hex, width: 16, height: 16, borderRadius: 100, border: "1px solid #d6d6d6" }}></p>
                  <p style={{ marginLeft: 8 }}> {item.name}</p>
                </div>
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </div>
      <div className="discount padding borderBottom">
        <h2>DISCOUNT RANGE</h2>
        <Radio.Group onChange={onDiscountRangeChange} value={discountRange} size="small">
          <Radio value={10}>10% and above</Radio>
          <Radio value={20}>20% and above</Radio>
          <Radio value={30}>30% and above</Radio>
          <Radio value={40}>40% and above</Radio>
          <Radio value={50}>50% and above</Radio>
          <Radio value={60}>60% and above</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};
export default FilterBar;
