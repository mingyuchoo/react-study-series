import React from 'react';
import { useReactiveVar } from '@apollo/client';

import { setCount } from '@/features/vars';

export default function Counter(): React.ReactElement {
  const count = useReactiveVar(setCount);
  const buttons = [
    { key: 1, handler: () => setCount(count - 1), text: '-' },
    { key: 2, handler: () => setCount(count + 1), text: '+' },
  ];

  return (
    <div style={{ borderStyle: 'dashed', borderColor: 'blue' }}>
      <div>
        <span>{count}</span>
        {buttons.map((item) => (
          <button key={item.key} onClick={item.handler}>
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
