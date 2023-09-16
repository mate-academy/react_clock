import React from 'react';

type Props = {
  name: string
};

type State = {
  today: Date
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdShowTime = 0;

  componentDidMount(): void {
    this.timerIdShowTime = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerIdShowTime);
  }

  render(): React.ReactNode {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
