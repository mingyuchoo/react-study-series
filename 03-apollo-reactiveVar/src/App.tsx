import React from 'react';

import Counter from '@/features/counter';

import logo from './logo.svg';

type Data = {
  span: string;
  uri: string;
  text: string;
};

const data: Array<Data> = [
  { span: 'Learn', uri: 'https://reactjs.org/', text: 'React' },
  { span: ', ', uri: 'https://redux.js.org/', text: 'Redux' },
  { span: ', ', uri: 'https://redux-toolkit.js.org/', text: 'Redux Toolkit' },
  { span: 'and ', uri: 'https://react-redux.js.org/', text: 'React Redux' },
];

export default function App(): React.ReactElement {
  return (
    <div style={{ borderStyle: 'dashed', borderColor: 'red' }}>
      <header>
        <img src={logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          {data.map((item, index) => (
            <div key={index}>
              <span>{item.span}</span>
              <a href={item.uri}>{item.text}</a>
            </div>
          ))}
        </span>
      </header>
    </div>
  );
}
