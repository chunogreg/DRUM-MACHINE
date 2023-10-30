import Inputs from "./Inputs";
import Display from "./Display";
import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    if (value === "0") {
      setValue(e.target.value);
    } else {
      setValue(value + e.target.value);
    }
  };

  const handleClear = () => {
    setValue("0");
  };
  const handleEquals = () => {
    setValue(parseFloat(eval(value)));
  };

  const handleDecimal = (e) => {
    !(value.charAt(value.length - 1) === ".") &&
      setValue(value + e.target.value);
  };
  const handleDivide = (e) => {
    !(value.charAt(value.length - 1) === "/") &&
      setValue(value + e.target.value);
  };
  const handleMultiply = (e) => {
    !(value.charAt(value.length - 1) === "*") &&
      setValue(value + e.target.value);
  };
  const handleAdd = (e) => {
    !(value.charAt(value.length - 1) === "+") &&
      setValue(value + e.target.value);
  };
  const handleMinus = (e) => {
    !(value.charAt(value.length - 1) === "-") &&
      setValue(value + e.target.value);
  };

  return (
    <div className="calc">
      <Display value={value} />
      <Inputs
        onclick={handleClick}
        clear={handleClear}
        equals={handleEquals}
        decimal={handleDecimal}
        divide={handleDivide}
        multiply={handleMultiply}
        add={handleAdd}
        minus={handleMinus}
      />
    </div>
  );
};
export default Calculator;
