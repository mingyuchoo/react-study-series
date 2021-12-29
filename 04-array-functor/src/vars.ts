import { makeVar } from '@apollo/client';

import users from './users.json';

export type User = { id: number; email: string; name: string; activated: boolean };
export const initUsers: Array<User> = users;
export const setUsers = makeVar<Array<User>>(initUsers);

export type State = { mode: string; id: number; toAdd: string; toUpdate: string };
export const initState: State = { mode: 'idle', id: 0, toAdd: '', toUpdate: '' };
export const setState = makeVar<State>(initState);
