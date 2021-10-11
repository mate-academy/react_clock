import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  isVisible: boolean;
  name: number;
};

class App extends React.Component<Props, State> {
  state = {
    isVisible: true,
    name: 0,
  };

  componentDidUpdate(_prevProps: Readonly<Props>, prevState: Readonly<State>) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.name} to ${this.state.name}`);
  }

  getRandomName() {
    this.setState({ name: Math.floor(Math.random() * 100) });
  }

  changeVisibility() {
    const { isVisible } = this.state;

    this.setState({
      isVisible: !isVisible,
    });
  }

  render() {
    const { name, isVisible } = this.state;
    const status = isVisible ? 'Hide' : 'Show';

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <button
          className="App__button"
          type="button"
          onClick={() => {
            this.changeVisibility();
          }}
        >
          {status}
        </button>
        <button
          className="App__button"
          type="button"
          onClick={() => {
            this.getRandomName();
          }}
        >
          Random Name
        </button>
        {isVisible && <Clock name={name} />}
      </div>
    );
  }
}

export default App;
