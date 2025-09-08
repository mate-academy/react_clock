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

  formatTime(date: Date): string {
    return date.toUTCString().slice(-12, -4);
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });

      // eslint-disable-next-line no-console
      console.log(this.formatTime(now));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const nameChanged = this.props.name !== prevProps.name;

    if (nameChanged) {
      if (this.props.name) {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
      }
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

        <span className="Clock__time">{this.formatTime(this.state.today)}</span>
      </div>
    );
  }
}
