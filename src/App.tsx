import React from 'react';
import Clock from './components/Clock';
import { generateName } from './utils';

import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: generateName(),
  };

  componentDidMount() {
    const show = document.getElementById('show') as HTMLElement;
    const hide = document.getElementById('hide') as HTMLElement;
    const setName = document.getElementById('setName') as HTMLElement;

    show.addEventListener('click', () => {
      this.setState({ isClockVisible: true });
    });

    hide.addEventListener('click', () => {
      this.setState({ isClockVisible: false });
    });

    setName.addEventListener('click', () => {
      this.setState({ clockName: generateName() });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible && <Clock name={this.state.clockName} />}

        <div className="controls">
          <button type="button" id="show">Show Clock</button>
          <button type="button" id="hide">Hide Clock</button>
          <button type="button" id="setName">Set random name</button>
        </div>
      </div>
    );
  }
}

export default App;
