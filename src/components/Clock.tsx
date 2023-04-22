import { Component } from 'react';

function getCurrentTime() {
  const time = new Date();

  return time.toUTCString().slice(-12, -4);
}

interface Props {
  name: string;
}

type State = {
  today: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: getCurrentTime(),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getCurrentTime() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.today}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
