import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    // eslint-disable-next-line no-console
    console.log('Stopped');
  }

  render() {
    return (
      <span>
        {this.state.time.toLocaleTimeString()}
      </span>
    );
  }
}
