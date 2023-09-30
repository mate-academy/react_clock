import React from 'react';

function getCorrectTime(): string {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}

interface Props {
  name: string,
}

interface State {
  time: string,
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    time: getCorrectTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: getCorrectTime() });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name: prevName } = prevProps;
    const { name } = this.props;

    if (prevProps !== this.props) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
