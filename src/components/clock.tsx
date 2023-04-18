import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timeTimerId = 0;

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.timeTimerId = window.setInterval(() => {
      console.info(this.state.today.toUTCString().slice(-12, -4)); // eslint-disable-line
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeTimerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
