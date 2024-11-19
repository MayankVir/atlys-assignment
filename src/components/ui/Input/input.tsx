import React, { ChangeEventHandler } from "react";
import "./styles.css";

type Props = {
  key?: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  key,
  label = "",
  value,
  placeholder = "Enter equation",
  onChange = () => {},
}: Props) => {
  return (
    <div className="input-container">
      <label htmlFor={key ?? label} className="label">
        {label}
      </label>
      <input
        id={key ?? label}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
