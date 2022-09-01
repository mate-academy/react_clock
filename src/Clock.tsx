import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.info(date.toLocaleTimeString());

      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    const { name: oldName } = prevProp;
    const { name: newName } = this.props;

    if (newName !== oldName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
