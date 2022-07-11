import React from 'react';

type State = {
  date: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.tickHandler, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tickHandler = () => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line no-console
    console.log(new Date().toLocaleTimeString());
  };

  render() {
    return (
      <div className="clock">
        <strong>{`Clock-name: ${this.props.name}`}</strong>
        {` time is ${this.state.date.toLocaleTimeString()}`}
      </div>
    );
  }
}
