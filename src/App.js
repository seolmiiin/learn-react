//custom hook 만들기
//input을 hook으로 만들어보자

import React, { useReducer, useRef, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './userList';
import useInput from './useInput';

function CountActiveUsers(users) {
  console.log('활성사용자 수를 세는 중');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const [form, onChange, reset] = useInput({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.curren,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE_USER', id });
  }, []);
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
