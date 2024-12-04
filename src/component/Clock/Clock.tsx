import React from 'react';

type Props = {
  getRandomName: () => string;
  name: string;
};

type State = {
  timerId: number;
  time: string;
  currName: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    timerId: 0,
    time: '',
    currName: this.props.name,
  };

  componentDidMount(): void {
    this.setState({ time: new Date().toUTCString().slice(-12, -4) });

    const timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);
      this.setState({ time: currentTime });
    }, 1000);

    this.setState({ timerId });
  }

  componentDidUpdate(): void {
    if (this.state.currName !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${this.state.currName} to ${this.props.name}`);
      this.setState({ currName: this.props.name });
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
