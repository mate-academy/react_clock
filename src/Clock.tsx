import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

function getDate(): string {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: getDate(),
  };

  time = 0;

  componentDidMount(): void {
    this.time = window.setInterval(() => {
      const newToday = getDate();

      this.setState({ today: newToday });
      // eslint-disable-next-line no-console
      console.log(newToday);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.time);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
