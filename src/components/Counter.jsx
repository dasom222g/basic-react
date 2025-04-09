import React, { useState } from "react";
// import Button from "./Button";

const Counter = () => {
  // logic

  // 첫번째: 데이터, 두번째: 함수
  const [countS, setCountS] = useState(0);

  // 미션
  // countS의 값 - 최소값: 0, 최대값 10
  const MIN = 0;
  const MAX = 10;

  const handleCount = (type) => {
    // type: increase | decrease
    // setCountS(type === "increase" ? countS + 1 : countS - 1);
    if (type === "increase") {
      // increase버튼 클릭시
      countS < MAX && setCountS(countS + 1);
    } else {
      // decrease버튼 클릭시
      countS > MIN && setCountS(countS - 1);
    }
  };

  // view
  return (
    <div>
      <h1>{countS}</h1>
      <div style={{ display: "flex" }}>
        {/* <Button />
        <Button /> */}
        <button type="button" onClick={() => handleCount("increase")}>
          +1
        </button>
        <button type="button" onClick={() => handleCount("decrease")}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
