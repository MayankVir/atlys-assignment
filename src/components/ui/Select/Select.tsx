import React from "react";
import "./styles.css";

type Props = {
  key?: string;
  label: string;
  value: { label: string; value: string | number };
  disabled?: boolean;
  options?: { label: string; value: string | number }[];
};

const Select = ({ key, label, disabled, value, options }: Props) => {
  return (
    <div className="select-container">
      <label htmlFor={key ?? label}>{label}</label>
      <select disabled={disabled} value={value.value}>
        {options?.map((option, index) => (
          <option
            key={`${key ?? label ?? "select"}-${index}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
