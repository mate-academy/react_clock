import React from 'react';

interface Props {
  clockName: string;
}
interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  private timerID = 0;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line no-console
    console.log(this.state.date.toUTCString().slice(-12, -4));
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
