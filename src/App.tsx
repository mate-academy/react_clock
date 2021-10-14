import React from 'react';
import './App.scss';
import { Clock } from './Components/Сlock/Clock';

type State = {
  name: number;
  isVisible: boolean;
};

type Props = {};

class App extends React.Component<Props, State> {
  state = {
    name: 0,
    isVisible: true,
  };

  componentDidUpdate(prevState: Readonly<State>) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.name} to ${this.state.name}`);
  }

  setRandomName() {
    this.setState({ name: Math.floor(Math.random() * 100) });
  }

  render() {
    const content = this.state.isVisible ? 'Hide' : 'Show';

    return (
      <div className="App">
        <h1>React clock</h1>
        <h2>{`Name: ${this.state.name}`}</h2>
        <h4>Double click to change name</h4>
        <button
          type="button"
          onClick={() => {
            const { isVisible } = this.state;

            this.setState({ isVisible: !isVisible });
          }}
          onDoubleClick={() => {
            this.setRandomName();
          }}
        >
          {content}
        </button>

        <p>
          Current time:
          {' '}
          {this.state.isVisible && <Clock name={this.state.name} />}
        </p>
      </div>
    );
  }
}

export default App;
