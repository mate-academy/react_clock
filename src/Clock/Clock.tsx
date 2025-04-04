import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
  timerID: number | undefined;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
    timerID: undefined,
  };

  componentDidMount() {
    const timerId = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);

    this.setState({ timerID: timerId });
  }

  componentWillUnmount() {
    if (this.state.timerID !== undefined) {
      window.clearInterval(this.state.timerID);
    }
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
