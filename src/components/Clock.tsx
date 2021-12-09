import React from 'react';

type State = {
  currentTime: string | null;
};

export class Clock extends React.Component<{}, State> {
  state = {
    currentTime: null,
  };

  componentDidMount() {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
  }

  componentDidUpdate() {
    setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  // componentWillUnmount() {
  //   this.setState({
  //     clear
  //   });
  // }

  // timerId: NodeJS.Timer = setInterval(() => {
  //   const date: Date = new Date();

  //   // eslint-disable-next-line
  //   console.log(date.toLocaleTimeString());

  //   return date.toLocaleTimeString();
  // }, 1000);
  render() {
    return (
      <>
        Current time:
        {' '}
        {this.state.currentTime}
      </>
    );
  }
}
