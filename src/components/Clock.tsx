import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

function getFormattedDate(currentTime: Date) {
  return currentTime.toUTCString().slice(-12, -4);
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentTime: new Date(),
  };

  validTimeZone = this.state.currentTime.toUTCString().slice(-12, -4);

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line no-console
      console.info(getFormattedDate(this.state.currentTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormattedDate(this.state.currentTime)}
        </span>
      </div>
    );
  }
}
