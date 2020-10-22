import React from 'react';
import { ClockShape } from '../../shapes/Clock';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { name, isVisible } = this.props;
    const time = this.state.date.toLocaleTimeString();

    return (
      <div>
        {
          isVisible
            ? <p>{`Current time: ${time}`}</p>
            : <p>Hidden clock</p>
        }
        <p>
          {`Clock name : ${name}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = ClockShape;
