import React from "react";
import Greeting from "../components/Greeting";
// import Button from "../components/Button";
import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // logic
  const history = useNavigate();
  const name = "후츠릿";
  const handleClick = () => {
    console.log("클릭");
    history("/info"); // 이동할 페이지의 path
  };

  // view
  return (
    <div>
      <h1>Home</h1>
      <Greeting userName={name} />
      {/* <Button text="버튼" onButtonClick={handleClick} /> */}
      <Counter />
      <button type="button" onClick={handleClick}>
        Info페이지로 이동
      </button>
    </div>
  );
};

export default Home;
