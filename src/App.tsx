import React from 'react';
import Clock from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  name: string,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    name: 'Clock',
  };

  randomNme = setInterval(() => {
    const randomName = Math.random().toString().slice(2, 6);

    this.setState({ name: `Clock - ${randomName}` });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    clearInterval(this.randomNme);
  }

  render() {
    const { hasClock, name } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        {hasClock && <Clock name={name} />}
      </div>
    );
  }
}

export default App;
