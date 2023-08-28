import { Component } from 'react';

type State = {
  currentTime: string,
  timerId: number | null,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
    timerId: null,
  };

  componentDidMount() {
    const timerId2 = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.info(`${currentTime}`);
      this.setState({
        currentTime,
      });
    }, 1000);

    this.setState({
      timerId: timerId2,
    });
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.state.timerId !== null) {
      window.clearInterval(this.state.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
