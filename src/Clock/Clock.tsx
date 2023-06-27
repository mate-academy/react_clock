import React from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdLitle = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.timerIdLitle = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today
        .toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        }));
    }, 1000);
  }

  // This code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerIdLitle);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
