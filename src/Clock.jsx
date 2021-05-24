import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.inter = () => {
      console.log(new Date().toLocaleTimeString());
      this.setState({ time: new Date() });
    };

    this.interId = setInterval(this.inter, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interId);
  }

  render() {
    return (
      <>
        {this.state.time.toLocaleTimeString()}
      </>
    );
  }
}

export default Clock;
