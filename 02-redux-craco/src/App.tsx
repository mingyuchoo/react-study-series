import React from 'react';

import Board from '@/features/board';
import Counter from '@/features/counter';

import logo from './logo.svg';

type Data = {
  span: string;
  url: string;
  text: string;
};

const data: Array<Data> = [
  { span: 'Learn', url: 'https://reactjs.org/', text: 'React' },
  { span: ', ', url: 'https://redux.js.org/', text: 'Redux' },
  { span: ', ', url: 'https://redux-toolkit.js.org/', text: 'Redux Toolkit' },
  { span: 'and ', url: 'https://react-redux.js.org/', text: 'React Redux' },
];

export default function App(): React.ReactElement {
  return (
    <div style={{ borderStyle: 'dashed', borderColor: 'red' }}>
      <header>
        <Board />
        <img src={logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          {data.map((item, index) => (
            <>
              <span key={index}>{item.span}</span>
              <a href={item.url}>{item.text}</a>
            </>
          ))}
        </span>
      </header>
    </div>
  );
}
