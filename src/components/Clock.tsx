import { Component } from 'react';

function getTime(): string {
  return (new Date()).toUTCString().slice(-12, -4);
}

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends Component <Props, State> {
  state: Readonly<State> = {
    time: getTime(),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(getTime());

      this.setState({ time: getTime() });
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
