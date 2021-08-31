import React from 'react';

type State = {
  time: string,
};

type Props = {
  clockName: number,
};

export class Clock extends React.Component<Props, State> {
  state = {
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
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>
      </>
    );
  }
}
