import React, { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { Checkbox } from "antd";

import "./FilterBar.scss";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { filterColors } from "utils/filterColors";
import { useDispatch, useSelector } from "react-redux";
import { setGenderFilter, setDiscountRangeFilter, setColorFilter, setPriceFilter } from "store/filter/reducer";
import { AppState } from "store/store";

interface Props {}
const FilterBar: React.FC<Props> = ({}) => {
  const filters = useSelector((state: AppState) => state.filter);
  const [gender, setGender] = useState<"MEN" | "WOMEN" | "BOYS" | "GIRLS" | null>(filters.gender);
  const [colors, setColors] = useState<CheckboxValueType[]>(filters.color);
  const [discountRange, setDiscountRange] = useState<number | null>(filters.discountRange);
  const [price, setPrice] = useState<CheckboxValueType[]>(filters.price);

  const dispatch = useDispatch();

  const onGenderChange = (e: RadioChangeEvent) => {
    setGender(e.target.value);
    dispatch(setGenderFilter(e.target.value));
  };

  const onDiscountRangeChange = (e: RadioChangeEvent) => {
    setDiscountRange(e.target.value);
    dispatch(setDiscountRangeFilter(e.target.value));
  };

  const onColorsChange = (checkedValues: CheckboxValueType[]) => {
    setColors(checkedValues);
    dispatch(setColorFilter(checkedValues));
  };

  const onPriceChange = (checkedValues: CheckboxValueType[]) => {
    setPrice(checkedValues);
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

      <div className="categories padding borderBottom">
        <h2>Price</h2>
        <Checkbox.Group onChange={onPriceChange} value={price}>
          <Checkbox value={"374-1531"}>Rs. 374 to Rs. 1531</Checkbox>
          <Checkbox value={"1531-2688"}>Rs. 1531 to Rs. 2688</Checkbox>
          <Checkbox value={"2688-3845"}>Rs. 2688 to Rs. 3845</Checkbox>
          <Checkbox value={"3845-5002"}>Rs. 3845 to Rs. 5002</Checkbox>
        </Checkbox.Group>
      </div>
      <div className="colors padding borderBottom">
        <h2>Colors</h2>
        <Checkbox.Group onChange={onColorsChange} value={colors}>
          {filterColors.map((item) => {
            return (
              <Checkbox value={item.name} key={item.name} style={{ display: "flex" }}>
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
