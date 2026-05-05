import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  timerId: number;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newDate });

      // eslint-disable-next-line no-console
      console.log(newDate);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
