import { makeVar } from '@apollo/client';

const initCount = 0;
export const setCount = makeVar<number>(initCount);
