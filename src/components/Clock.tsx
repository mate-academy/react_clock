import React from 'react';

type Props = {
  name: string;
};
type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toUTCString().slice(-12, -4));

    if (prevProps.name === this.props.name) {
      return;
    }

    // eslint-disable-next-line no-console
    console.warn(
      `Renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
