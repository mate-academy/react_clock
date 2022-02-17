/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';
import { User } from './types';

type State = {
  isClockVisible: boolean,
  user: User | null,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    user: null,
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

  getUser = async (): Promise<any> => {
    let oldUser = '(there was no name for this user yet...)';
    let newUser = '(new user name is loading....)';

    if (this.state.user) {
      const { title, first, last } = this.state.user.name;

      oldUser = `${title}. ${first} ${last}`;
    }

    await fetch('https://randomuser.me/api')
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({
          user: resp.results[0],
        });
      }).then(() => {
        if (this.state.user) {
          const { title, first, last } = this.state.user.name;

          newUser = `${title}. ${first} ${last}`;
        }

        console.log(
          `then user name was changed from ${oldUser} to ${newUser}`,
        );
      });
  };

  render(): React.ReactNode {
    const { isClockVisible, user } = this.state;

    return (
      <div className="z">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && user !== null
            && <Clock user={user} />}
        </p>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.getUser}>
          Change user
        </button>
        {user
        && (
          <div>
            <img
              src={`${user.picture.large}`}
              alt={`${user.name.first}`}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
