//배열에 항목추가하기
//추가한 항목 삭제하기
//추가된 항목의 이름 클릭하면 색 바뀌게 만들기

import React, { useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './userList';

function CountActiveUsers(users){
  console.log('활성사용자 수를 세는 중');
  return(
    users.filter(user=>user.active).length
  );
}

function App() {

  const [inputs, setInputs] = useState({
    username :'',
    email : '',
  })

  const { username, email } = inputs;

  const onChange = useCallback(e =>{
    const {name, value}=e.target;
    setInputs({
      ...inputs,
      [name] : value,
    })
  },[inputs]);

 const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);

  const nextId= useRef(4);

  const onCreate = useCallback(() =>{
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers(
      //[...users, user]
      users.concat(user)
    )
    setInputs({
      username : '',
      email : ''
    })
    nextId.current += 1;
  },[username, email, users])
//항목삭제
const onRemove= useCallback(id =>{
  setUsers(users.filter(user => user.id !== id));
},[users]);
//토글기능
const onToggle = useCallback(id =>{
  setUsers(users.map(user => user.id===id ? {...user, active :!user.active } : user))
},[users])

/*
여기서 발생하는 성능적 문제가 한가지 있습니다. 
바로, input 의 값을 바꿀때에도 
countActiveUsers 함수가 호출된다는 것 입니다.
이러한 상황에는 useMemo 라는 Hook 함수를 사용하면 성능을 최적화 할 수 있습니다.

Memo 는 "memoized" 를 의미하는데,
 이는, 이전에 계산 한 값을 재사용한다는 의미를 가지고 있습니다.
*/

const count=useMemo(()=>CountActiveUsers(users),[users]);

  return (
      <>
        <CreateUser 
          username={username} 
          email={email} 
          onChange={onChange} 
          onCreate={onCreate} 
        />
        
        <UserList users= { users } onRemove={onRemove} onToggle={onToggle} /> 
        {/* props를 user라고 써서 계속 오류남 */}
        <div>활성사용자 수 : {count} </div>
      </>
      );
}

export default App;
