import React from 'react';

// jsx내부에서 자바스크립트 값사용하는 방법 : 중괄호로 감싸주면 된다.
function Hello(){
  const name = 'React'
  const style = {
    color : 'red',
    fontSize : 24
  }
  return(
    <>
    <div style={style}>hello {name}!</div>
    </>
  );
}

//내보내기
export default Hello;