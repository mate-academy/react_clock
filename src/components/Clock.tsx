import React from 'react';
import './Clock.scss';

type State = {
  date: Date;
};

class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Mounted');
    this.timerId = setInterval(this.syncData, 1000);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('Unmounted');
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  syncData = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    return (
      <div className="App">
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default Clock;
