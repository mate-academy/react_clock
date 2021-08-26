import React from 'react';
import './App.scss';

type State = {
  isClockVisible?: boolean;
  data?: string;
  clockName?: number;
};

class App extends React.Component<State> {
  state = {
    isClockVisible: true,
    data: new Date().toLocaleTimeString(),
    clockName: 0,
  };

  componentDidMount() {
    const showDate = () => {
      if (this.state.isClockVisible) {
        // eslint-disable-next-line no-console
        console.log(this.state.data);
      }
    };

    setInterval(() => {
      showDate();

      this.setState({
        data: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidUpdate(_prevProps: unknown, prevState: { data: string; }) {
    if (this.state.isClockVisible) {
      this.state.data = new Date().toLocaleTimeString();
    } else {
      this.state.data = prevState.data;
    }
  }

  render() {
    const { data } = this.state;

    function showClock() {
      return (
        <p>
          Current time:
          {' '}
          {data}
        </p>
      );
    }

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          (this.state.isClockVisible) && showClock()
        }

        <button
          type="button"
          onClick={() => {
            this.state.isClockVisible = true;
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.state.isClockVisible = false;
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.state.clockName = Math.floor(Math.random() * 100 + 1);
            // eslint-disable-next-line no-console
            console.log('The Clock was renamed from oldName to newName');
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
