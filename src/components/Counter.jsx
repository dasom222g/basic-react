import React, { useState } from "react";
// import Button from "./Button";

const Counter = () => {
  // logic
  // let count = 10;

  // 첫번째: 데이터, 두번째: 함수
  const [countS, setCountS] = useState(0);

  const handleIncrease = () => {
    console.log("click!!");
    // count = count + 1
    // count = count + 1;
    // console.log("🚀 ~ handleIncrease ~ count:", count);
    setCountS(countS + 1);
  };

  // 미션
  // -1버튼 클릭시 handleDecrease라는 함수를 호출하여 count값 감소시키기
  const handleDecrease = () => {
    setCountS((prev) => prev - 1);
  };

  const handleCount = (type) => {
    // type: increase | decrease
    setCountS(type === "increase" ? countS + 1 : countS - 1);
  };

  // 미션
  // countS의 값 - 최소값: 0, 최대값 10

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
