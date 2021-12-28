import { useReactiveVar } from '@apollo/client';
import React, { useReducer, useState } from 'react';

import { setUsers, TUser } from './vars';

type State = { mode: string; id: number };
type Action = { type: 'READ' } | { type: 'MODIFY'; id: number };

const initState = { mode: 'read', id: 0 };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'MODIFY':
      return { mode: 'modify', id: action.id };
    case 'READ':
      return { mode: 'read', id: 0 };
    default:
      return state;
  }
}

export default function App(): React.ReactElement {
  const [add, setAdd] = useState('');
  const [modify, setModify] = useState('');
  const users = useReactiveVar<Array<TUser>>(setUsers);
  const [state, dispatch] = useReducer(reducer, initState);

  function handleAddChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAdd(event.target.value);
  }
  function handleModifyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setModify(event.target.value);
  }
  function handleAdd() {
    if (add === '') return;
    const newUser = {
      id: users.length + 1,
      email: `${add}@email.com`,
      name: add,
      activated: false,
    };
    setUsers(users.concat(newUser));
    setAdd('');
  }
  function handleModify() {
    if (modify === '') return;
    /// ADD SOME CODE HERE TO MODIFY DATA
    setModify('');
    dispatch({ type: 'READ' });
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
        <input type={'text'} name={'name'} value={add} onChange={handleAddChange} onKeyPress={(event) => event.key === 'Enter' && handleAdd()} />
        <button onClick={handleAdd}>add</button>
      </p>
      {users.map((element, index) => (
        <div key={index}>
          {state.mode === 'modify' && state.id === element.id ? (
            <div>
              <input type={'text'} name={element.name} value={modify} onChange={handleModifyChange} />
              <button onClick={() => handleModify()}>Save</button>
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch({ type: 'MODIFY', id: element.id });
                setModify(element.name);
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
