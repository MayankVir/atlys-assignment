import React, { useContext, useState } from "react";

import Input from "../ui/Input/input";
import Select from "../ui/Select/Select";
import Dot from "../ui/Dot/Dot";

import { FunctionCardProps } from "../../types/types";

import { ReactComponent as DragDrop } from "../../assets/svg/drag.svg";

import "./styles.css";
import { AppContext } from "../../context/appContext";

const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  equation,
  reference,
  output,
}) => {
  const { initialValue, setInitialValue, updateFunction } =
    useContext(AppContext);

  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFunction(id, e.target.value);
  };

  return (
    <div className="card" id={`function-${id.toString()}`}>
      {id === 1 && (
        <div className="input-value-box">
          <label>Initial Value of x:</label>
          <div className="input-dot">
            <input
              type="number"
              value={initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
            />
            <div className="dot-container">
              <Dot />
            </div>
          </div>
        </div>
      )}
      <div className="card-header">
        <div className="header">
          <DragDrop />
          Function {id}
        </div>
        <div className="input-select">
          <Input
            label="Equation"
            value={equation}
            onChange={handleEquationChange}
          />

          <Select
            label="Next Equation"
            options={[1, 2, 3, 4, 5].map((_) => ({
              label: `Function ${_}`,
              value: _,
            }))}
            value={{ label: "Function 2", value: 2 }}
            disabled
          />
        </div>
      </div>
      <div className="card-footer" ref={reference}>
        <div className="footer">
          <Dot /> input{" "}
        </div>
        <div className="footer">
          output <Dot />
        </div>
      </div>
      {id === 3 && (
        <div className="output-value-box">
          <label>Final Output Y</label>
          <div className="output-dot">
            <div className="dot-container">
              <Dot />
            </div>
            <input type="number" value={output} disabled />
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionCard;
