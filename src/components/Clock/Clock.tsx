import React from 'react';

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, {}> {
  state = {
    timer: '',
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
      this.setState({ timer: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    return (
      <div className="clock">
        Current time:
        {' '}
        {this.state.timer}
      </div>
    );
  }
}
