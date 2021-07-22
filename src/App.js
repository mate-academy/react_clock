import React from 'react';
import { Clock } from './Clock/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClockVisible: true,
      clockName: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="card text-center">
          <div className="card-header">
            React clock
          </div>
          <div className="card-body">
            <div className="card-text">
              {this.state.isClockVisible
               && <Clock name={this.state.clockName} />
              }
            </div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => this.setState({ isClockVisible: true })
                }
              >
                Show Clock
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => this.setState({ isClockVisible: false })
                }
              >
                Hide Clock
              </button>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={
                  () => this.setState({ clockName: Math.trunc(
                    Math.random() * 1000,
                  ) })
                }
              >
                Set random name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
