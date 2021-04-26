import React from 'react';

//CSS MODULE
/*
리액트 프로젝트에서 컴포넌트를 스타일링 할 때 CSS Module 이라는 기술을 사용하면, 
CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있습니다.
*/
import styles from './CheckBox.module.css';

function CheckBox({ children, checked, ...rest }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div>{checked ? '체크됨' : '체크안됨'}</div>
      </label>
      <span>{children}</span>
    </div>
  );
}

// function CheckBox({ children, checked, onChange }) {
//   return (
//     <div>
//       <label>
//         <input type="checkbox" checked={checked} onChange={onChange} />
//         <div>{checked ? '체크됨' : '체크안됨'}</div>
//       </label>
//       <span>{children}</span>
//     </div>
//   );
// }

export default CheckBox;
