import React from 'react';

import { selectCount } from '@/slices/counter';
import { useAppSelector } from '@/store';

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
