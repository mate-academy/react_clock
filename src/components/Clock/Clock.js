import React from 'react';
import './Clock.scss';

class Clock extends React.Component {
  state = {
    time: (new Date()).toLocaleTimeString(),
    isClockVisible: true,
    name: 'Nice Clock',
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: (new Date()).toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  toggleVisible = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  };

  changeName = () => (
    this.setState((prevState) => {
      const newName = this.randomize();

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.name} to ${newName}`);

      return {
        name: newName,
      };
    })
  );

  randomize = () => Math.floor(Math.random() * 1000);

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="clock">
        <h1>
          {`Clock named ${name}`}
        </h1>
        <p>
          {isClockVisible ? `Current time:
          ${this.state.time}` : ''}
        </p>
        <button
          className="visibility-button"
          type="button"
          onClick={this.toggleVisible}
        >
          {isClockVisible ? 'Hide clock' : 'Show clock'}
        </button>
        <button
          className="name-button"
          type="button"
          onClick={this.changeName}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default Clock;
