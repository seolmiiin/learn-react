import React from 'react';
import './Button.scss';
import classNames from 'classnames';
// yarn add node-sass
//BUTTON컴포넌트 만들기
//1. color props
//2. size
//3. outline
//4. fullWidth
function Button({ children, color, size, outline, fullWidth }) {
  return (
    <>
      <button
        className={classNames('Button', color, size, {
          outline,
          fullWidth,
        })}
      >
        {children}
      </button>
    </>
  );
}
Button.defaultProps = {
  color: 'orange',
  size: 'medium',
};
export default Button;
