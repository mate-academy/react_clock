import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: (new Date()).toLocaleTimeString(),
  };

  start = setInterval(() => {
    // eslint-disable-next-line
    console.log((new Date()).toLocaleTimeString());
    this.setState({ time: (new Date()).toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.start;
  }

  componentWillUnmount() {
    clearInterval(this.start);
  }

  render() {
    const { time } = this.state;

    return (
      <>
        <h1>{ this.props.clockName }</h1>
        <p>
          Current time:
          {' '}
          {time}
        </p>
      </>
    );
  }
}
