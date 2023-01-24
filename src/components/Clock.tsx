import { Component } from 'react';

type State = {
  time: string;
};

type Props = {
  name: string;
};

function newTime(): string {
  return (new Date()).toUTCString().slice(-12, -4);
}

export class Clock extends Component <Props, State> {
  state: Readonly<State> = {
    time: newTime(),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(newTime());

      this.setState({ time: newTime() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

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
