import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    visibility: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  changeName = () => {
    this.setState((state) => {
      const random = Math.floor(Math.random() * Math.floor(1000));

      // eslint-disable-next-line no-console
      console.log(`The Clock has been renamed from ${state.name} to ${random}`);

      return { name: random };
    });
  }

  isClockVisible = () => {
    this.setState(state => ({ visibility: !state.visibility }));
  };

  render() {
    const { date, name, visibility } = this.state;

    return (
      <div>
        <h1>Clock</h1>
        <h2>{`Name: ${name}`}</h2>
        <h3>
          {visibility ? `Current time : ${date.toLocaleTimeString()}` : null}
        </h3>
        <div className="App__buttons">
          <button type="button" onClick={this.isClockVisible}>
            {visibility ? 'Hide Clock!' : 'Show Clock!'}
          </button>
        </div>
        <button type="button" onClick={this.changeName}>
          Try to change the name!
        </button>
      </div>
    );
  }
}

export default Clock;
