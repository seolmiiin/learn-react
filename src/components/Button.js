import React from 'react';
import './Button.scss';
// yarn add node-sass

function Button({ children }) {
  return (
    <>
      <button className="Button">{children}</button>
    </>
  );
}

export default Button;
