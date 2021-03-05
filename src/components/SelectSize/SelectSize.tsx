import React, { useEffect, useState } from "react";
import "./SelectSize.scss";

interface Props {
  sizes: number[];
  selectedSize: (size: number | null) => void;
  showSizeError: boolean;
}
const SelectSize: React.FC<Props> = ({ sizes, selectedSize, showSizeError }) => {
  const [currentSize, setCurrenSize] = useState<number | null>(null);

  useEffect(() => {
    selectedSize(currentSize);
  }, [currentSize]);
  return (
    <div className="SelectSize">
      <p>Select Size</p>
      {showSizeError && <span>Please select a size</span>}
      <div className="sizes">
        {sizes.map((size, index) => {
          return (
            <div key={index} className={size === currentSize ? "circle outline" : "circle"} onClick={() => setCurrenSize(size)}>
              {size}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SelectSize;
