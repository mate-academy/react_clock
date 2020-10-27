import React from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

import './App.scss';

class App extends React.Component {
  state = {
    visible: true,
    nameOfClock: 1,
  }

  render() {
    const { visible, nameOfClock } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          React Clock
        </h1>
        {visible && <Clock name={nameOfClock} />}
        <div className="App__buttons">
          <Button
            body={
              visible ? 'hideClock' : 'showClock'
            }
            click={
              () => {
                this.setState({ visible: !visible });
              }
            }
          />
          <Button
            body="Change name"
            click={
              () => {
                const newName = Math.floor(Math.random() * 50);

                // eslint-disable-next-line no-console
                console.log(`was renamed from ${nameOfClock} to ${newName}`);

                this.setState({
                  nameOfClock: newName,
                });
              }
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
