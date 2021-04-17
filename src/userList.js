import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(()=>{
    console.log('component가 화면에 나타남');
    return ()=>{
      console.log('component가 화면에서 사라짐')
    }
  },[]);
  return (
    <div>
      <b
      onClick={()=> onToggle(user.id)}
       style={
         {
           cursor : "pointer",
           color : user.active ? "green" : "black"
         }
       }
      >{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;