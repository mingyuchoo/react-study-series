import { useReactiveVar } from '@apollo/client';
import React from 'react';

import { setState, setUsers, State, User } from './vars';

export default function App(): React.ReactElement {
  const users = useReactiveVar<Array<User>>(setUsers);
  const state = useReactiveVar<State>(setState);

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'toAdd':
        setState({ ...state, toAdd: event.target.value });
        break;
      case 'toUpdate':
        setState({ ...state, toUpdate: event.target.value });
        break;
      default:
        setState({ ...state });
    }
  }
  function handleAdd() {
    if (state.toAdd === '') return;
    const newUser = {
      id: users.length + 1,
      email: `${state.toAdd}@email.com`,
      name: state.toAdd,
      activated: false,
    };
    setUsers([newUser].concat(users));
    setState({ ...state, mode: 'idle', toAdd: '' });
  }
  function handleModify() {
    if (state.toUpdate === '') return;
    const newUser = {
      id: state.id,
      email: `${state.toUpdate}@email.com`,
      name: state.toUpdate,
      activated: false,
    };
    setUsers(users.map((element) => (element.id === state.id ? newUser : element)));
    setState({ ...state, mode: 'idle', toUpdate: '' });
  }
  function handleActivate(id: number) {
    setUsers(users.map((element) => (element.id === id ? { ...element, activated: !element.activated } : element)));
  }
  function handleDelete(id: number) {
    setUsers(users.filter((element) => element.id !== id));
  }
  return (
    <div>
      <p>
        <input
          type={'text'}
          name={'toAdd'}
          value={state.toAdd}
          onChange={onInputChange}
          onKeyPress={(event) => event.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>toAdd</button>
      </p>
      {users.map((element, index) => (
        <div key={index}>
          {state.mode === 'update' && state.id === element.id ? (
            <div>
              <input
                type={'text'}
                name={'toUpdate'}
                value={state.toUpdate}
                onChange={onInputChange}
                onKeyPress={(event) => event.key === 'Enter' && handleModify()}
              />
              <button onClick={handleModify}>Save</button>
            </div>
          ) : (
            <div
              onClick={() => {
                setState({ ...state, mode: 'update', id: element.id, toUpdate: element.name });
              }}>
              {element.name}
            </div>
          )}
          <button onClick={() => handleActivate(element.id)}>{element.activated ? 'Online' : 'Offline'}</button>
          <button onClick={() => handleDelete(element.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
