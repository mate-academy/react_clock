import React from 'react';

type Props = {
  name: string;
  hour: number;
};

type State = {
  date: string;
  timerId: NodeJS.Timer;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        const d = new Date(new Date().getTime() + (this.props.hour * 3600 * 1000));
        const hrs = d.getUTCHours().toLocaleString('en-EN', { minimumIntegerDigits: 2 });
        const mins = d.getUTCMinutes().toLocaleString('en-EN', { minimumIntegerDigits: 2 });
        const secs = d.getUTCSeconds().toLocaleString('en-EN', { minimumIntegerDigits: 2 });
        const newDate = `${hrs}:${mins}:${secs}`;

        this.setState({ date: newDate });
        // eslint-disable-next-line
        console.log(this.state.date);
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </>
    );
  }
}
