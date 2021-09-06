import React from 'react';

type State = {
  time: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  update = setInterval(() => {
    this.setState({ time: new Date().toLocaleTimeString() });

    // eslint-disable-next-line
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
        <span>
          Current time:
          {' '}
          {time}
        </span>
      </>
    );
  }
}
