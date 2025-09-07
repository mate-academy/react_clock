import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  get formattedTime() {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(_prevProps: Readonly<Props>, prevState: Readonly<State>) {
    const nameChanged = this.state.today !== prevState.today;

    if (nameChanged) {
      // eslint-disable-next-line no-console
      console.log(this.formattedTime);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.formattedTime}</span>
      </div>
    );
  }
}
