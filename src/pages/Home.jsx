import React from "react";
import Greeting from "../components/Greeting";
import Button from "../components/Button";
import Counter from "../components/Counter";

const Home = () => {
  const name = "후츠릿";
  const handleClick = () => {
    console.log("클릭");
  };

  return (
    <div>
      Home
      <Greeting userName={name} />
      <Button text="버튼" onButtonClick={handleClick} />
      <Counter />
      <button type="button">Info페이지로 이동</button>
    </div>
  );
};

export default Home;
