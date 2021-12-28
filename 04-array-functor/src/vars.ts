import { makeVar } from '@apollo/client';

import users from './users.json';

export type TUser = {
  id: number;
  email: string;
  name: string;
  activated: boolean;
};
export const initUsers: Array<TUser> = users;
export const setUsers = makeVar<Array<TUser>>(initUsers);
