import React from 'react';

import Baby from '@/features/baby';
import Counter from '@/features/counter';
import HoverRating from '@/features/rating';

import Organization from './features/organization';
import Choose from './features/stage';

export default function App(): React.ReactElement {
  return (
    <div style={{ borderStyle: 'dashed', borderColor: 'red' }}>
      <Organization />
      {/* <Baby />
      <Counter />
      <HoverRating />
      <Choose /> */}
    </div>
  );
}
