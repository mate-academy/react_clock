import React from 'react';

type Props = {
  name: string;
};
type State = {
  time: Date;
};
export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  intervalId: number = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const time = new Date();

      this.setState({
        time,
      });

      // eslint-disable-next-line no-console
      console.log(time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
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
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
