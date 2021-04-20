//useReducer로 상태관리하기
//1. useState 다지우기

import React, { useRef, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './userList';

function CountActiveUsers(users) {
  console.log('활성사용자 수를 세는 중');
  return users.filter((user) => user.active).length;
}

const initialState={
  inputs : {
    username : '',
    email : ''
  }
  users : [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]
}


function App() {
 
  const nextId = useRef(4);



  const count = useMemo(() => CountActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      {/* props를 user라고 써서 계속 오류남 */}
      <div>활성사용자 수 : {count} </div>
    </>
  );
}

export default App;
