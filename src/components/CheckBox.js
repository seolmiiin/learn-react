import React, { useRef } from 'react';

//CSS MODULE
/*
리액트 프로젝트에서 컴포넌트를 스타일링 할 때 CSS Module 이라는 기술을 사용하면, 
CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있습니다.
*/
import styles from './CheckBox.module.css';

// 이제, 스타일링을 해봅시다! 스타일링을 하기 전에 react-icons 라는 라이브러리를 설치해주세요.
// $ yarn add react-icons
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function CheckBox({ children, checked, ...rest }) {
  const inputRef = useRef();
  return (
    <div className={cx('checkbox')}>
      <label>
        <input ref={inputRef} type="checkbox" checked={checked} {...rest} />
        <div className={cx('icon')}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </label>
      <span onClick={checked ? inputRef.current}>{children}</span>
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
