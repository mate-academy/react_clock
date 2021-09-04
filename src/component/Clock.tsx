import React from 'react';

type Props = {
  clockName: number;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  update = setInterval(() => {
    this.setState({ time: new Date().toLocaleTimeString() });

    // eslint-disable-next-line no-console
    console.log(this.state.time);
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
          {time}
        </p>
      </>
    );
  }
}
