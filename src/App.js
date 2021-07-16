import React from 'react';
import Clock from './components/Clock/Clock';
import Button from './components/Button/Button';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: 123,
    isClockVisible: true,
  }

  messege = () => {
    const oldName = this.state.clockName;
    const newName = Math.floor(Math.random() * 1000);

    this.setState({
      clockName: newName,
    });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  }

  hide = () => {
    this.setState({ isClockVisible: true });
  }

  show = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {clockName}
        </h1>
        {this.state.isClockVisible && <Clock {...this.state} />}
        <Button
          messege={this.messege}
          hide={this.hide}
          show={this.show}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
