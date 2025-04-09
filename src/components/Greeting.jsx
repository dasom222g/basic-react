import React from "react";

const Greeting = () => {
  // 자바스크립트 코드
  const name = "이준범";
  const classNames = ["title", "text-large"];

  // html 코드
  return (
    <>
      <h1 className={`${classNames.join(" ")}`}>안녕하세요! {name}님!</h1>
      <p>오늘도 좋은 하루 되세요!</p>
    </>
  );
};

export default Greeting;
