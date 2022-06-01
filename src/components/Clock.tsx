import React from 'react';

type Props = {
  name: string;
};
type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  startTimer = setInterval(() => {
    this.setState({ currentTime: new Date() });

    // eslint-disable-next-line
    console.log(this.state.currentTime.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.startTimer;
  }

  componentWillUnmount() {
    clearInterval(this.startTimer);
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <p>
          <span>Current time: </span>
          <span>{this.state.currentTime.toLocaleTimeString()}</span>
        </p>
      </>
    );
  }
}
