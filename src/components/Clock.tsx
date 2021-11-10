import React from 'react';
import './Clock.scss';

type Props = {};

interface State {
  currentDate: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentDate: new Date() });

      // eslint-disable-next-line
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentDate } = this.state;

    return (
      <div>
        <h1 className="Heading">React clock is here</h1>
        <p className="Text">
          <span>Current time:</span>
          {' '}
          <span>{currentDate.toLocaleTimeString()}</span>
        </p>
      </div>
    );
  }
}
