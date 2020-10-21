import React from 'react';
import { ClockShape } from '../../shapes/Clock';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        {
          this.props.isVisible
            ? <p>{`Current time: ${this.state.date.toLocaleTimeString()}`}</p>
            : <p>Hidden clock</p>
        }
        <p>
          {`Clock name : ${this.props.name}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = ClockShape;
