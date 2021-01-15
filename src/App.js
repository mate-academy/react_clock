import React from 'react';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    clockName: Math.random(),
    time: new Date(),
    isClockVisible: true,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  randomName() {
    const randomName = Math.random();
    // eslint-disable-next-line
    console.log(
      `The Clock was renamed from ${this.state.clockName} to ${randomName}`,
    );
    this.setState({ clockName: randomName });
  }

  render() {
    const { time, isClockVisible } = this.state;
    const getShow = () => (
      this.setState(
        {
          isClockVisible: true,
        },
      )
    );
    const getHide = () => (
      this.setState(
        {
          isClockVisible: false,
        },
      )
    );

    return (
      <>
        {isClockVisible ? <Clock time={time} /> : ''}

        <button
          type="button"
          onClick={getShow}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={getHide}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.randomName()}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
