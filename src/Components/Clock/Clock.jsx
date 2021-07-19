import React from 'react';
import Button from '../Button/Button';
import { clockPropTypes } from '../PropTypes/clockPropTypes';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    isVisible: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isVisible) {
        this.setDate();
        // eslint-disable-next-line
        console.log(this.state.date);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setDate = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  hide = () => {
    this.setState({ isVisible: false });
  }

  show = () => {
    this.setState({ isVisible: true });
  }

  render() {
    const { changeName } = this.props;

    return (
      <>
        {this.state.isVisible ? (
          <p
            className="App__current-time"
          >
            {`Current time: ${this.state.date}`}
          </p>
        )
          : (<p className="destroyed">Time was stopped</p>) }
        <Button hide={this.hide} show={this.show} changeName={changeName} />
      </>
    );
  }
}

Clock.propTypes = clockPropTypes;
