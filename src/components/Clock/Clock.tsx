import { Component } from 'react';

type Props = {
  name: string
};

type State = {
  currentTime: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ currentTime });
      // eslint-disable-next-line no-console
      console.info(currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const currentName = this.props.name;
    const prevName = prevProps.name;

    if (prevName !== currentName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
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
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
