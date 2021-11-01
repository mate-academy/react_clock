import React from 'react';
import './App.scss';
import Clock from './Components/Clock';

type State = {
  randomName: string;
  isClockVisible: boolean;
};

type Props = {};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<Props, State> {
  state: State = {
    randomName: 'randomNum',
    isClockVisible: true,
  };

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.randomName !== this.state.randomName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.randomName} to ${this.state.randomName}`);
    }
  }

  render() {
    const handleSwitcher = (typeBtn: string) => {
      if (typeBtn === 'on') {
        this.setState({ isClockVisible: true });
      } else if (typeBtn === 'off') {
        this.setState({ isClockVisible: false });
      }
    };

    const setRandomName = () => {
      this.setState({ randomName: String(Math.round(Math.random() * 100)) });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock />}
        </p>
        <button type="button" onClick={() => handleSwitcher('on')}>
          Show Clock
        </button>
        <button type="button" onClick={() => handleSwitcher('off')}>
          Hide Clock
        </button>
        <button
          name={String(this.state.randomName)}
          type="button"
          onClick={setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
