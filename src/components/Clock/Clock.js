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
