import React from 'react';
import { setInterval } from 'timers';

type State = {
  currentTime: Date,
}

type Props = {
  clockName: string,
  isVisible: boolean,
}

export class Clock extends React.Component {
  state: State = {
    currentTime: new Date(),
  };

  props: Props = {
    clockName: '',
    isVisible: true
  }

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
    if (this.props.isVisible) {
      console.log(this.state.currentTime.toLocaleTimeString());
      
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <>
        <p>
          Current time:
          {' '}
          {currentTime.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
