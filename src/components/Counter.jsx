import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  // logic

  // 첫번째: 데이터, 두번째: 함수
  const [countS, setCountS] = useState(0);
  const [step] = useState(2);

  // 미션
  // countS의 값 - 최소값: 0, 최대값 10
  const MIN = 0;
  const MAX = 10;

  const handleCount = (type) => {
    // type: increase | decrease
    // setCountS(type === "increase" ? countS + 1 : countS - 1);
    if (type === "increase") {
      // increase버튼 클릭시
      countS < MAX && setCountS(countS + step);
    } else {
      // decrease버튼 클릭시
      countS > MIN && setCountS(countS - step);
    }
  };

  // view
  return (
    <div>
      <h1>{countS}</h1>
      <div style={{ display: "flex" }}>
        <Button
          text={`+${step}`}
          type={"increase"}
          onButtonClick={handleCount}
        />
        <Button
          text={`-${step}`}
          type={"decrease"}
          onButtonClick={handleCount}
        />
        {/* <button type="button" onClick={() => handleCount("increase")}>
          +1
        </button>
        <button type="button" onClick={() => handleCount("decrease")}>
          -1
        </button> */}
      </div>
    </div>
  );
};

export default Counter;
