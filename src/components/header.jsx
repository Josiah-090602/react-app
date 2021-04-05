import React from "react";

const Header = (props) => {
  return (
    <>
      <h1>This is the header</h1>
      <h1>Hello I'm {props.name}</h1>
    </>
  );
};

export default Header;
