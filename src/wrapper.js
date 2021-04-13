// <div>div안에 어떤 내용을 넣는데</div>
// <wrapper>div가 아니고 컴포넌트일때 이 안에 넣은 값을
//   추적할때 사용하는 것이 props.children
// </wrapper>

import React from 'react';

//내부의 내용이 보여지게 하기 위해서는 Wrapper 에서 
//props.children 을 렌더링해주어야 합니다.
function Wrapper({children}){
  const style = {
    border : '5px solid red',
    padding : 16

  };

  return <div style = {style}>{children}</div>
}

export default Wrapper;