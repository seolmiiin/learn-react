//useRef 로 컴포넌트 안의 변수 만들기
/*
컴포넌트에서 특정 DOM 을 선택해야 할 때,
 ref 를 사용해야 한다고 배웠었습니다. 
 그리고, 함수형 컴포넌트에서 이를 설정 할 때 
 useRef 를 사용하여 설정한다고 배웠었습니다.

useRef Hook 은 DOM 을 선택하는 용도 외에도, 
다른 용도가 한가지 더 있는데요, 바로, 
컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.

useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면,
 useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.
*/
import React, { useRef } from 'react';
import UserList from './userList';



function App() {
  //userList에 선언했던 이 배열을 App 에서 선언하고
  //  UserList 에게 props 로 전달을 해주겠습니다.
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
//useRef() 를 사용하여 nextId 라는 변수를 만들어보겠습니다.
//위에 배열 users의 id가 3까지 있으므로 다음에 만들어질 아이디는 4부터닌까
//기본값을 4로 지정해준다.
  const userId= useRef(4);
  /*
  useRef() 를 사용 할 때 파라미터를 넣어주면, 
  이 값이 .current 값의 기본값이 됩니다.

그리고 이 값을 수정 할때에는 
.current 값을 수정하면 되고 조회 할 때에는
 .current 를 조회하면 됩니다.
  */
  const onCreate=()=>{
    userId.current += 1;
  }

  return (
      <UserList user={users} />
      );
}

export default App;
