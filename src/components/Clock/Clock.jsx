import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    visibility: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  isClockVisible = () => {
    this.setState(state => ({ visibility: !state.visibility }));
  };

  changeName = () => {
    this.setState((state) => {
      const randomNum = Math.floor(Math.random() * Math.floor(1000));

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${state.name} to ${randomNum}`);

      return { name: randomNum };
    });
  }

  render() {
    const { date, name, visibility } = this.state;

    return (
      <>
        <h1>React clock</h1>
        <h2>{`Name: ${name}`}</h2>
        <h3>
          {visibility ? `Current time: ${date.toLocaleTimeString()}` : null}
        </h3>
        <p>
          <button type="button" onClick={this.isClockVisible}>
            {visibility ? 'Invisible time' : 'Visible time'}
          </button>
        </p>
        <button type="button" onClick={this.changeName}>
          Change name
        </button>
      </>
    );
  }
}

export default Clock;
