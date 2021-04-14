//배열에 항목추가하기
//추가한 항목 삭제하기

import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './userList';



function App() {

  const [inputs, setInputs] = useState({
    username :'',
    email : '',
  })

  const { username, email } = inputs;

  const onChange = e =>{
    const {name, value}=e.target;
    setInputs({
      ...inputs,
      [name] : value,
    })
  }

 const [users, setUsers] = useState([
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
  ]);

  const nextId= useRef(4);

  const onCreate = () =>{
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
  }
//항목삭제
const onRemove= id =>{
  setUsers(users.filter(user => user.id !== id));
}


  return (
      <>
        <CreateUser 
          username={username} 
          email={email} 
          onChange={onChange} 
          onCreate={onCreate} 
        />
        
        <UserList users= { users } onRemove={onRemove} /> 
        {/* props를 user라고 써서 계속 오류남 */}

      </>
      );
}

export default App;
