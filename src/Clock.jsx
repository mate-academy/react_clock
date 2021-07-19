import React from 'react';
import { Button } from './Button';

import { clockProps } from './propstypes';

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
    const { random } = this.props;

    return (
      <>
        {this.state.isVisible && (
          <p>
            {`Current time: ${this.state.date}`}
          </p>
        )}
        <Button hide={this.hide} show={this.show} random={random} />
      </>
    );
  }
}

Clock.propTypes = clockProps;
