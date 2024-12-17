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

  todayId = 0;

  componentDidMount() {
    this.todayId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.todayId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
