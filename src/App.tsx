import React from 'react';
import './App.scss';

type Props = {};
interface State {
  time: string;
}

class App extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {time}
        </p>
      </div>
    );
  }
}

export default App;
