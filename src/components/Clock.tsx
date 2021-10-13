import React from 'react';

type State = {
  currentDate: Date;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    currentDate: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(this.dateUpdate, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  dateUpdate = () => {
    // eslint-disable-next-line no-console
    console.log(this.state.currentDate.toLocaleTimeString());

    this.setState({
      currentDate: new Date(),
    });
  };

  render() {
    return (
      this.state.currentDate.toLocaleTimeString()
    );
  }
}
