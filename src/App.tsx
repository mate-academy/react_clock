import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  clockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockVisible: true,
    clockName: 'Clock',
  };

  clockHide = () => {
    this.setState({ clockVisible: false });
  };

  clockShow = () => {
    this.setState({ clockVisible: true });
  };

  render() {
    const { clockVisible, clockName } = this.state;

    return (
      <div className="app">
        <div className="app__block">
          <h2 className="app__name">{`${clockName}`}</h2>
          {clockVisible && (<Clock clockName={clockName} />)}
          <div className="app__buttons">
            <button
              className="app__button"
              type="button"
              onClick={this.clockShow}
              disabled={clockVisible}
            >
              Show
            </button>

            <button
              className="app__button"
              type="button"
              onClick={() => this.setState({
                clockName: String(Math.floor(Math.random() * 10)),
              })}
              disabled={!clockVisible}
            >
              Rename
            </button>

            <button
              className="app__button"
              type="button"
              onClick={this.clockHide}
              disabled={!clockVisible}
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
