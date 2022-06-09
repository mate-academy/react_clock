import React from 'react';
import './Clock.scss';

interface Props {
  from: number;
}

interface State {
  time: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        <p>{ time }</p>

      </div>
    );
  }
}
