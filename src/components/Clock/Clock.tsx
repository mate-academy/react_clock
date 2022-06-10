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
      // eslint-disable-next-line no-console
      console.log(this.state.time);

      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    if (prevProp.from !== this.props.from) {
      // eslint-disable-next-line no-console
      console.log(`The Clock updated from ${prevProp.from} to ${this.props.from}`);
    }
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
