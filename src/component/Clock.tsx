import React from 'react';

type Props = {
  clockName: number;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  update = setInterval(() => {
    const { time } = this.state;

    this.setState({ time: new Date() });

    // eslint-disable-next-line no-console
    console.log(time.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.update;
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state;

    return (
      <>
        <p>
          Current time:
          {' '}
          {time.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
