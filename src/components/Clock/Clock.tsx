import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
