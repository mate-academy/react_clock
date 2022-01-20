import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { Clock } from './Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: Math.trunc(Math.random() * 500),
  };

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  generateRandomName = () => {
    return Math.trunc(Math.random() * 500);
  };

  changePage = (isClockVisible: boolean) => {
    this.setState({
      isClockVisible,
      clockName: Math.trunc(Math.random() * 500),
    });
  };

  changeName = (name: number) => {
    this.setState({
      clockName: name,
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="title has-text-centered">React clock</h1>

        <div className="
          App
          has-shadow
          is-flex
          is-justify-content-space-evenly"
        >

          <button
            className="
              button
              navbar-item
              is-light"
            type="button"
            onClick={
              () => this.changePage(true)
            }
          >
            Show Clock
          </button>

          <button
            className="
              button
              navbar-item
              is-light"
            type="button"
            onClick={
              () => this.changePage(false)
            }
          >
            Hide Clock
          </button>

          <button
            className="
              button
              navbar-item
              is-light"
            type="button"
            onClick={() => (
              this.changeName(this.generateRandomName())
            )}
          >
            Set random name
          </button>
        </div>
        {isClockVisible && (
          <div className="
            subtitle
            is-flex
            is-justify-content-space-evenly"
          >
            <span className="">
              Current time:
              {' '}
            </span>
            <Clock name={clockName} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
