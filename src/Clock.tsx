/* eslint-disable no-console */
import React from 'react';

const formatAMPM = (date: Date): string => {
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'AM' : 'PM';

  hours %= 12;
  const min = date.getMinutes().toString().padStart(2, '0');
  const sec = date.getSeconds().toString().padStart(2, '0');
  const strTime = `${hours}:${min}:${sec} ${ampm}`;

  return strTime;
};

type Props = {
  name: string,
};
type State = {
  currentTime: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
      console.info(formatAMPM(this.state.currentTime));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Props,
  ): void {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatAMPM(this.state.currentTime)}
        </span>
      </div>
    );
  }
}
