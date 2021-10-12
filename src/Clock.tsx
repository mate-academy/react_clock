import React from 'react';

type State = {
  date: Date;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
