import { makeVar } from '@apollo/client';

import users from './users.json';

export type User = { id: number; email: string; name: string; activated: boolean };
export const initUsers: Array<User> = users;
export const setUsers = makeVar<Array<User>>(initUsers);
