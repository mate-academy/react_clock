import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    prevName: 0,
    showTime: false,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.date);
  }

  changeName = () => {
    this.setState(prevState => ({
      prevName: prevState.name,
      name: Math.floor(Math.random() * 1000),
    }));
    // how to skip first console log??
    // eslint-disable-next-line no-console
    console.log(`Name was changed from ${this.state.prevName} 
    to ${this.state.name}`);
  }

  visible = () => {
    this.setState(prevState => ({
      showTime: !prevState.showTime,
    }));
  }

  // eslint-disable-next-line consistent-return
  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current name:
          {' '}
          {this.state.name}
        </p>
        <span hidden={this.state.showTime}>
          <p>
            Current time:
            {' '}
            {this.state.date.toLocaleTimeString()}
          </p>
        </span>

        <p>
          <button type="button" onClick={this.changeName}>
            Click to change name
          </button>
          {' '}
          <button type="button" onClick={this.visible}>
            Click to hide clock
          </button>
        </p>
      </div>

    );
  }
}
