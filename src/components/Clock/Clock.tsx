import React from 'react';

function getFormattedDate(): string {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}

interface ClockState {
  today: string;
  todayTimer?: number;
}

interface ClockProps {
  clockName: string;
}

export class Clock extends React.Component<ClockProps> {
  state: Readonly<ClockState> = {
    today: getFormattedDate(),
  };

  componentDidMount() {
    const handleToday = () => {
      const date = getFormattedDate();

      this.setState((state: ClockState) => {
        return { ...state, today: date };
      });

      // eslint-disable-next-line no-console
      console.info(date);
    };

    this.setState((state: ClockState) => ({
      ...state,
      todayTimer: window.setInterval(handleToday, 1000),
    }));
  }

  componentWillUnmount() {
    window.clearInterval(this.state.todayTimer);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
