/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: getCurrentTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: getCurrentTime() });
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps !== this.props) {
      const oldName = prevProps.name;
      const newName = this.props.name;

      console.debug(`Renamed from ${oldName} to ${newName}`);
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
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
