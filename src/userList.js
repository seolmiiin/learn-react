import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  // useEffect(()=>{
  //   console.log('component가 화면에 나타남');
  //   return ()=>{
  //     console.log('component가 화면에서 사라짐')
  //   }
  // },[]);
  
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 가 바뀌기 전..');
  //     console.log(user);
  //   };
  // }, [user]);




  // deps 파라미터를 생략하기
  // useEffect(() => {
  //   console.log(user);
  // });
  // 컴포넌트가 리렌더링 될 때마다 호출이 됩니다.




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
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default React.memo(UserList);