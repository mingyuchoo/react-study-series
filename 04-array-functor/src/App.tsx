import { useReactiveVar } from '@apollo/client';
import React, { useReducer } from 'react';

import { setUsers, User } from './vars';
type State = { mode: string; id: number; add: string; modify: string };
type Action =
  | { type: 'record/IDLE' }
  | { type: 'record/MODIFY'; id: number; modify: string }
  | { type: 'input/CHANGE'; name: string; value: string };

const initState: State = { mode: 'read', id: 0, add: '', modify: '' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'record/MODIFY':
      return { ...state, mode: 'modify', id: action.id, modify: action.modify };
    case 'record/IDLE':
      return { ...state, mode: 'read', id: 0 };
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
    if (state.add === '') return;
    const newUser = { id: users.length + 1, email: `${state.add}@email.com`, name: state.add, activated: false };
    setUsers([newUser].concat(users));
    dispatch({ type: 'input/CHANGE', name: 'add', value: '' });
    dispatch({ type: 'record/IDLE' });
  }
  function handleModify() {
    if (state.modify === '') return;
    const newUser = { id: state.id, email: `${state.modify}@email.com`, name: state.modify, activated: false };
    setUsers(users.map((element) => (element.id === state.id ? newUser : element)));
    dispatch({ type: 'input/CHANGE', name: 'modify', value: '' });
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
          name={'add'}
          value={state.add}
          onChange={onInputChange}
          onKeyPress={(event) => event.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>add</button>
      </p>
      {users.map((element, index) => (
        <div key={index}>
          {state.mode === 'modify' && state.id === element.id ? (
            <div>
              <input
                type={'text'}
                name={'modify'}
                value={state.modify}
                onChange={onInputChange}
                onKeyPress={(event) => event.key === 'Enter' && handleModify()}
              />
              <button onClick={handleModify}>Save</button>
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch({ type: 'record/MODIFY', id: element.id, modify: element.name });
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
