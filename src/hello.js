import React from 'react';

// 구조 분해 할당으로 props 사용하기
function Hello({name, age}){

  return(
    <>
    <div> {name}님의 나이는 {age}입니다.</div>    
    </>
  );
}

//내보내기
export default Hello;