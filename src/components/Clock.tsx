import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  idTimer = 0;

  componentDidMount() {
    this.idTimer = window.setInterval(() => {
      this.setState({ date: new Date() });
      window.console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.idTimer);
  }

  render() {
    const { date } = this.state;
    const timeToString = date.toUTCString().slice(-12, -4);
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{timeToString}</span>
      </div>
    );
  }
}
