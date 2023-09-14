import React from 'react';

type Props = {
  name: string,
};

type State = {
  currentDate: Date,
};

export class Clock extends React.Component<Props> {
  state: State = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.getCurrentTime());
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  getCurrentTime = () => {
    return this.state.currentDate.toUTCString().slice(-12, -4);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getCurrentTime()}
        </span>
      </div>
    );
  }
}
