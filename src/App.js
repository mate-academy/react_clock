import React from 'react';
import { Clock } from './Components/Clock/Clock';
import { Button } from './Components/Button/Button';
import where from './image/4qb.gif';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  changeCloc = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  };

  getRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  render() {
    return (
      <div className="stile">
        {
          this.state.isClockVisible
            ? <Clock name={this.state.clockName} />
            : <img src={where} alt="where" />
        }
        <div>
          <Button
            name="Show Clock"
            onClick={this.changeCloc}
          />
          <Button
            name="Hide Clock"
            onClick={this.changeCloc}
          />
          <Button
            name="Say my name"
            onClick={this.getRandomName}
          />
        </div>
      </div>
    );
  }
}

export default App;
