import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: Math.floor(Math.random() * 1000),
    time: new Date(),
    isClockVisible: true,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  randomName() {
    const randomName = Math.floor(Math.random() * 1000);
    // eslint-disable-next-line
    console.log(
      `The Clock was renamed from ${this.state.clockName} to ${randomName}`,
    );
    this.setState({ clockName: randomName });
  }

  render() {
    const { time, isClockVisible, clockName } = this.state;

    const getShow = () => (
      this.setState({ isClockVisible: true })
    );
    const getHide = () => (
      this.setState({ isClockVisible: false })
    );

    return (
      <div className="container">
        {isClockVisible ? <Clock time={time} name={clockName} /> : ''}

        <button
          type="button"
          onClick={getShow}
          className="button"
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={getHide}
          className="button"
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.randomName()}
          className="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
