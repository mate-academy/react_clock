import React from 'react';

type Props = {
  clockName: string;
  // today більше не приходить через пропси
};

// Додаємо власний State для годинника
type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId: number | undefined;

  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
