import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        onClick={() =>
          dispatch({
            type: 'TOGGLE_USER',
            id,
          })
        }
        style={{
          cursor: 'pointer',
          color: active ? 'green' : 'black',
        }}
      >
        {username}
      </b>
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_USER',
            id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
