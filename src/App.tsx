import React from 'react';
import Clock from './components/Clock';
import './App.scss';

type Props = {};

type State = {
  clockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    clockVisible: true,
    clockName: '...',
  };

  componentDidMount() {
    const show = document.getElementById('show') as HTMLElement;
    const hide = document.getElementById('hide') as HTMLElement;

    show.addEventListener('click', () => {
      this.setState({ clockVisible: true });
    });

    hide.addEventListener('click', () => {
      this.setState({ clockVisible: false });
    });
  }

  render() {
    const { clockVisible, clockName } = this.state;

    return (
      <div className="App clock">
        <h1>React clock</h1>
        <h2 className="clock__block">
          {clockVisible && <Clock name={clockName} />}
        </h2>

        <div className="clock__controls">
          <button type="button" id="show">Show Clock</button>
          <button type="button" id="hide">Hide Clock</button>
        </div>

        <div className="clock__input">
          <input type="text" id="inputName" placeholder="Clock name" />
          <button type="button" id="setName">Set new Clocks name</button>
        </div>
      </div>
    );
  }
}

export default App;
