import React from 'react';

function createTime() {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}

interface Props {
  clockName: string;
}

interface State {
  today: string,
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: createTime(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: createTime() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { clockName } = this.props;
    const { today } = this.state;

    if (prevProps.clockName !== clockName) {
      window.console.debug(`Renamed from ${clockName} to ${prevProps.clockName}`);
    }

    if (prevState.today !== today) {
      window.console.info(prevState.today);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
