import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  private timerId: NodeJS.Timer | null;

  constructor(props: Props) {
    super(props);

    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    if (prevName !== this.props) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="clock">
        <div data-cy="time" className="clock__time">{currentTime}</div>
      </div>
    );
  }
}
