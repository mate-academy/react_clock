import React from 'react';

interface Props {
  name: {};
}

interface State {
  date: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <span data-cy="time">
        {this.state.date}
      </span>
    );
  }
}
