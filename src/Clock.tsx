import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  time: Date,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {this.props.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.time.toLocaleTimeString()}
          </span>
        </div>
      </div>
    );
  }
}
