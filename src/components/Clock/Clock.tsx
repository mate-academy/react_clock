import React from 'react';

interface State {
  currentTime: string;
}

type Props = {
  name: string;
};

function getTimeFromDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: getTimeFromDate(new Date()),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();
      const currentTime = getTimeFromDate(today);

      // eslint-disable-next-line
      console.info(currentTime);

      this.setState({
        currentTime,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prevName } = prevProps;
    const { name: currentName } = this.props;

    if (prevName !== currentName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
