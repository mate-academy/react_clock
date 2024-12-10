import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const prevName = prevProps.name;
    const currentName = this.props.name;

    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }

    if (prevName !== currentName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
