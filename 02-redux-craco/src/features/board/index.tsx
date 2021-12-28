import React from 'react';

import { useAppSelector } from '@/store';
import { selectCount } from '@/slices/counter';

export default function Counter(): React.ReactElement {
  const count = useAppSelector(selectCount);

  return (
    <div style={{ borderStyle: 'dashed', borderColor: 'blue' }}>
      <div>
        <span>{count}</span>
      </div>
    </div>
  );
}
