/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';
import { User } from './types';

class App extends React.Component {
  state: {
    isClockVisible: boolean,
    user: User | undefined,
  } = {
    isClockVisible: true,
    user: undefined,
  };

  componentDidMount() {
    this.getUser();
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  changingUser = () => {
    let oldUser = '(there was no name for this user yet...)';
    let newUser = '(new user name is loading....)';

    if (this.state.user) {
      const { title, first, last } = this.state.user.name;

      oldUser = `${title}. ${first} ${last}`;
    }

    this.getUser();

    setTimeout(() => {
      if (this.state.user) {
        const { title, first, last } = this.state.user.name;

        newUser = `${title}. ${first} ${last}`;
      }

      console.log(
        `then user name was changed from ${oldUser} to ${newUser}`,
      );
    }, 800);
  };

  getUser = async (): Promise<any> => {
    await fetch('https://randomuser.me/api')
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({
          user: resp.results[0],
        });
      });
  };

  render(): React.ReactNode {
    const { isClockVisible, user } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible
            && <Clock user={user} />}
        </p>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.changingUser}>
          Change user
        </button>
        {this.state.user
        && (
          <div>
            <img
              src={`${this.state.user.picture.large}`}
              alt={`${this.state.user.name.first}`}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
