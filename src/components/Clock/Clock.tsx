import React from 'react';
import './Clock.scss';

type Props = {
  clockName: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: '',
  };

  timerId: NodeJS.Timer = setInterval(() => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line
    console.log(this.state.time);
  }, 1000);

  componentDidMount() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from oldName to newName`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div
        className="clock"
        data-cy="time"
      >
        {this.state.time}
      </div>
    );
  }
}
