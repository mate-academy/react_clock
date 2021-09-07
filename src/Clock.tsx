import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timer = setInterval(() => {
    // eslint-disable-next-line no-console
    console.log(this.state.time);
    this.setState({ time: new Date().toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="clock App__clock">
        <h2 className="clock__name">
          {name}
        </h2>

        <div className="clock__time">
          {`Current time: ${time}`}
        </div>
      </div>
    );
  }
}
