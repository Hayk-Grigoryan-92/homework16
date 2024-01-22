import { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState<number>(Number);
  const [num2, setNum2] = useState<number>(Number);
  const [operator, setOperator] = useState<string>("+");
  const [result, setResult] = useState<number>(Number);

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(parseFloat(e.target.value));
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(parseFloat(e.target.value));
  };

  const handleOperatorChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setOperator(e.currentTarget.value);
  };

  const handleCalculate = () => {
    let calcResult = 0;
    if (operator === "+") {
      calcResult = num1 + num2;
    } else if (operator === "-") {
      calcResult = num1 - num2;
    } else if (operator === "*") {
      calcResult = num1 * num2;
    } else if (operator === "/") {
      calcResult = num1 / num2;
    } else {
      calcResult = 0;
    }
    setNum1(0);
    setNum2(0);
    setOperator("");
    setResult(calcResult);
  };

  return (
    <div className="calculator">
      <label>
        Enter First Number:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Enter Second Number:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>

      <label>
        Select Operation:
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>

      <button onClick={handleCalculate}>Calculate</button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
};
