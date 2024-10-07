import React from 'react';

type Props = {
  randomCurrentName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
      this.setState({ today: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    if (prevProp.randomCurrentName !== this.props.randomCurrentName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProp.randomCurrentName} to ${this.props.randomCurrentName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.randomCurrentName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
