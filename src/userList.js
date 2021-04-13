import React from 'react';

function UserList(){
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

  return(
    <div>
      <div>
         <p>
           <strong>{users[0].username}</strong> : <span>{users[0].email}</span>
         </p>
      </div>
      <div>
         <p>
           <strong>{users[1].username}</strong> : <span>{users[1].email}</span>
         </p>
      </div>
      <div>
         <p>
           <strong>{users[2].username}</strong> : <span>{users[2].email}</span>
         </p>
      </div>
    </div>
  );
}

export default UserList;