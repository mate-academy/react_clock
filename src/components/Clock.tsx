import { Component } from 'react';

interface Props {
  name: string
}

interface State {
  currentTime: string
}

const convertToSlicedUTCDate = (date: Date = new Date()): string => {
  return date.toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: convertToSlicedUTCDate(),
  };

  timerId = 0;

  componentDidMount = () => {
    this.timerId = window.setInterval(() => {
      this.setState({
        currentTime: convertToSlicedUTCDate(),
      });

      // eslint-disable-next-line no-console
      console.info(convertToSlicedUTCDate());
    }, 1000);
  };

  componentDidUpdate = (prevProps: Readonly<Props>) => {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  };

  componentWillUnmount = () => {
    window.clearInterval(this.timerId);
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
