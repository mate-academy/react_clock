import React from 'react';

class Clock extends React.Component {
  state = {
    timeNow: new Date(),
    intervalID: null,
  };

  componentDidMount() {
    this.setState({
      intervalID: setInterval(() => {
        this.setState({ timeNow: new Date()});
        // eslint-disable-next-line
        console.log(this.state.timeNow.toLocaleTimeString())
      }, 1000)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID)
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.timeNow.toLocaleTimeString()}
      </p>
    );
  }
}

export default Clock;
