import React from 'react';

// 구조 분해 할당으로 props 사용하기
function Hello({name, color}){

  return(
    <>
    <div style={{color :color}}> {name}님 안녕하세요</div>
    {/* {{}} 객체를 감싸는 중괄호인것 */}
    </>
  );
}

//내보내기
export default Hello;