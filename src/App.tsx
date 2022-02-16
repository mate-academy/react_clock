import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  randomName: string,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    randomName: '',
  };

  render() {
    const { isClockVisible, randomName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setName = () => {
      const arr
      = ['Austria', 'Belgium', 'Bulgaria', 'Great Britain', 'Hungary', 'Germany', 'Greece', 'Denmark', 'Ireland', 'Spain', 'Italy',
        'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia',
        'Finland', 'France', 'Croatia', 'Czech Republic', 'Sweden', 'Estonia'];

      this.setState({ randomName: arr[Math.floor(Math.random() * arr.length)] });
    };

    return (
      <div className="App">
        <h1>International clock</h1>
        <p className="countrie">
          {`Countries: ${randomName}`}
        </p>
        <p>
          {isClockVisible && <Clock clockName={randomName} />}
        </p>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={showClock}
          >
            Show
          </button>
          <button
            className="button"
            type="button"
            onClick={hideClock}
          >
            Hide
          </button>
          <button
            className="button"
            type="button"
            onClick={setName}
          >
            Set Country
          </button>
        </div>
      </div>
    );
  }
}

export default App;
