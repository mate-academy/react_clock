import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  todayId = window.setInterval(() => {
    const today = new Date();

    this.setState({ today: new Date() });

    // eslint-disable-next-line no-console
    console.log(today.toUTCString().slice(-12, -4));
  }, 1000);

  componentWillUnmount(): void {
    window.clearInterval(this.todayId);
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
