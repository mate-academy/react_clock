import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  timerId: number | undefined;

  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });

      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
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
