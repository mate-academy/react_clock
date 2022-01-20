/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  page: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    page: 'clock',
  };

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('App mounted');
  }

  changePage = (page: string) => {
    this.setState({
      page,
    });
  };

  render() {
    return (
      <div>
        <h1 className="clock__title">Clock</h1>
        <div>
          <button
            type="button"
            onClick={() => {
              this.changePage('home');
            }}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.changePage('clock');
            }}
          >
            Show Clock
          </button>
        </div>

        <div>
          {
            this.state.page === 'home'
              ? (
                <p>Press Show Clock</p>
              )
              : (
                <Clock />
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
