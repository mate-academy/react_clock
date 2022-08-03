import { Component } from 'react';

interface State {
  currentTime: Date;
}

interface Props {
  name: string;
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });

      // eslint-disable-next-line
      console.log(this.state.currentTime.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.name;
    const newName = this.props.name;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        time is

        <span className="Clock__time">
          {currentTime.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
