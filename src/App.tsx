import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {

};

type State = {
  // timerId: NodeJS.Timer;
};

export class App extends React.Component<Props, State> {
  state = {};

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          <Clock />
        </p>
      </div>
    );
  }
}

export default App;
