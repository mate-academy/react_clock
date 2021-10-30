import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toTimeString().replace(/ .*/, ''),
    timerID: 0,
  };

  componentDidMount() {
    const id = setInterval(() => {
      this.setState({ time: new Date().toTimeString().replace(/ .*/, '') });
      const date = new Date().toTimeString().replace(/ .*/, '');
      // eslint-disable-next-line
      console.log(date);
    }, 1000);

    this.setState({ timerID: id });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    return (
      ` ${this.state.time}`
    );
  }
}
