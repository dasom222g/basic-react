import React from "react";

const Button = ({ text, type, onButtonClick }) => {
  // logic
  const handleClick = () => {
    onButtonClick(type); // type: increase | decrease
  };

  // view
  return (
    <div className="button-area">
      <button type="button" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
