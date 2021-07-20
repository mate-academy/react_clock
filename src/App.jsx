import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isOnClick: true,
    clockName: Math.round(Math.random() * 100),
  };

  render() {
    return (
      <div
        className="card"
        style={{
          width: '20vw',
          margin: '50px auto',
        }}
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            this.setState({ clockName: Math.round(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
        {' '}
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => {
            this.setState({ isOnClick: false });
          }}
        >
          Hide Clock
        </button>
        {' '}
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => {
            this.setState({ isOnClick: true });
          }}
        >
          Show Clock
        </button>
        <h1 className="text-center bi bi-alarm">
          {this.state.clockName}
        </h1>
        { this.state.isOnClick && <Clock name={this.state.clockName} /> }

      </div>
    );
  }
}

export default App;
