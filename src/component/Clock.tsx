import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  today = new Date();

  state: Readonly<State> = {
    time: this.today,
  };

  currentTime = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.currentTime = window.setInterval(() => {
      this.today = new Date();
      this.setState({ time: this.today });

      // eslint-disable-next-line no-console
      console.log(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.currentTime);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{name}</strong>

          {' time is '}

          <span className="Clock__time">
            {time.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
