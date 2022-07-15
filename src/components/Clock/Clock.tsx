import React from 'react';
import './Clock.scss';

type Props = {
  name: number,
};

type State = {
  time: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = setInterval(() => {
    this.setState({ time: new Date() });

    // eslint-disable-next-line no-console
    console.log(`Time is: ${this.state.time.toLocaleTimeString()}`);
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`clockName: ${oldName} changed to clockName: ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="time">
        {`Time: ${this.state.time.toLocaleTimeString()}`}
      </div>
    );
  }
}
