import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.changeTime = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      console.log(this.state.time);
    }, 1000);

    return this.state.time;
  }

  componentDidUpdate(prevProps) {
    const { clockName } = this.props;

    prevProps.clockName !== clockName
    && console.log(`
      The Clock was renamed from ${prevProps.clockName}
      to ${clockName}
    `);
  }

  componentWillUnmount() {
    clearInterval(this.changeTime);
  }

  render() {
    return (
      <span>{this.state.time}</span>
    );
  }
};
