import React from 'react';

type Props = {
  name: number;
};

type State = {
  clock: string;
};

export class Clock extends React.Component<Props, State> {
  private timer?: number;

  state = {
    clock: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ clock: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.clock);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>{this.state.clock}</div>
    );
  }
}
