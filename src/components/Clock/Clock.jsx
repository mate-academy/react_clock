import React from 'react';

export class Clock extends React.Component {
  state = {
    clock: new Date(),
  };

  componentDidMount() {
    this.setState({
      period: setInterval(() => {
        this.setState({ clock: new Date() });
        /* eslint-disable-next-line */
        console.log(this.state.clock.toLocaleTimeString());
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.period);
  }

  render() {
    const { clock } = this.state;

    return (
      <span>
        {clock.toLocaleTimeString()}
      </span>
    );
  }
}
