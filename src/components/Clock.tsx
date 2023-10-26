import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentDate: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.currentDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
