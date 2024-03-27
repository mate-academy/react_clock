import React from 'react';

interface State {
  date: Date;
}

interface Props {
  clockName: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  private intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toUTCString().slice(-12, -4));
      this.setState({
        date,
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{date.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
