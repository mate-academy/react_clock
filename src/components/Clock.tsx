import { Component } from 'react';

interface Props {
  name: string
}

interface State {
  currentTime: string
  timerId: number
}

const toSlicedUTCDate = (date: Date = new Date()): string => {
  return date.toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: toSlicedUTCDate(),
    timerId: 0,
  };

  componentDidMount = () => {
    this.setState({
      timerId: window.setInterval(() => {
        this.setState({
          currentTime: toSlicedUTCDate(),
        });

        // eslint-disable-next-line no-console
        console.info(toSlicedUTCDate());
      }, 1000),
    });
  };

  componentDidUpdate = (prevProps: Readonly<Props>) => {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  };

  componentWillUnmount = () => {
    window.clearInterval(this.state.timerId);
  };

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
