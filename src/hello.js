import React from 'react';

//함수에서 props라는 프로퍼티 가져오기
//props는 우리가 넣어준값들이 객체형태로 들어가있다.
function Hello(props){
  // const style={
  //   color : props.color;
  // }
  return(
    <>
    <div style={{color : props.color}}> {props.name}님 안녕하세요</div>
    {/* {{}} 객체를 감싸는 중괄호인것 */}
    </>
  );
}

//내보내기
export default Hello;