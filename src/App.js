import React from 'react';
import Clock from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  toggleVisibility = () => {
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
      <div className="app">
        {isClockVisible
          ? <Clock name={name} />
          : <div className="app__no-clock" />
        }
        <button
          className="app__button"
          type="button"
          onClick={this.toggleVisibility}
        >
          {isClockVisible ? 'Hide  clock' : 'Show clock'}
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.changeName}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
