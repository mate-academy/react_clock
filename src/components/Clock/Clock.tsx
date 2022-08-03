import { Component } from 'react';

type Props = {
  name:string,
};

type State = {
  time:Date
};

export class Clock extends Component<Props, State> {
  state:Readonly<State> = {
    time: new Date(),
  };

  timerID!: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick();
        // eslint-disable-next-line no-console
        console.log(this.state.time);
      },
      1000,
    );
  }

  componentDidUpdate(prevProps:Props) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
