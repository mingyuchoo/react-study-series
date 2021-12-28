import counterReducer, { CounterState, increase, decrease, increaseByAmount } from '@/slices/counter';

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'IDLE',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'IDLE',
    });
  });

  it('should handle increase', () => {
    const actual = counterReducer(initialState, increase());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrease', () => {
    const actual = counterReducer(initialState, decrease());
    expect(actual.value).toEqual(2);
  });

  it('should handle increaseByAmount', () => {
    const actual = counterReducer(initialState, increaseByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
