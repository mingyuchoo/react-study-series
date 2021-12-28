import { useReactiveVar } from '@apollo/client';
import React, { useReducer } from 'react';

import { setUsers, User } from './vars';
type State = { mode: string; id: number; toAdd: string; toUpdate: string };
type Action =
  | { type: 'record/IDLE' }
  | { type: 'record/UPDATE'; id: number; toUpdate: string }
  | { type: 'input/CHANGE'; name: string; value: string };

const initState: State = { mode: 'idle', id: 0, toAdd: '', toUpdate: '' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'record/IDLE':
      return { ...state, mode: 'idle', id: 0 };
    case 'record/UPDATE':
      return { ...state, mode: 'update', id: action.id, toUpdate: action.toUpdate };
    case 'input/CHANGE':
      return { ...state, [action.name]: action.value };
  }
}

export default function App(): React.ReactElement {
  const users = useReactiveVar<Array<User>>(setUsers);
  const [state, dispatch] = useReducer(reducer, initState);

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'input/CHANGE', name: event.target.name, value: event.target.value });
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
    dispatch({ type: 'input/CHANGE', name: 'toAdd', value: '' });
    dispatch({ type: 'record/IDLE' });
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
    dispatch({ type: 'input/CHANGE', name: 'toUpdate', value: '' });
    dispatch({ type: 'record/IDLE' });
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
                dispatch({ type: 'record/UPDATE', id: element.id, toUpdate: element.name });
              }}
            >
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
