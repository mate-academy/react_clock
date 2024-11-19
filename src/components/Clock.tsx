import React from 'react';
type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  timerId2 = 0;

  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId2 = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: newTime });
      // eslint-disable-next-line no-console
      console.log(`${newTime}`);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId2);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
