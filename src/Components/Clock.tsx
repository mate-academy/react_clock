/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type State = {
  currentTime: string,
};

export class Clock extends React.Component<{}, State> {
  timerId?: ReturnType<typeof setInterval>;

  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ currentTime: date.toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        {'Current time: '}
        {this.state.currentTime}
      </div>
    );
  }
}
