import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  page: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    page: 'home',
  };

  changePage = (page: string) => {
    this.setState({
      page,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="button"
            onClick={() => {
              this.changePage('home');
            }}
          >
            Hide
          </button>
          <span> </span>
          <button
            type="button"
            className="button"
            onClick={() => {
              this.changePage('clock');
            }}
          >
            Show
          </button>
        </div>
        <div>
          {
            this.state.page === 'home'
              ? (
                <h1 className="title">React Clock</h1>
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
