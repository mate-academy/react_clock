import React from 'react';

class CurrentTime extends React.Component {
  state = {}

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.time}
      </p>
    );
  }
}

export default CurrentTime;
