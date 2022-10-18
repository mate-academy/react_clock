import { Component } from 'react';

type State = {
  today: Date,
  name: string,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
    name: this.props.name,
  };

  timerId = 0;

  clockId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line  no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);

    function getRandomName(): string {
      const value = Date.now().toString().slice(-4);

      return `Clock-${value}`;
    }

    this.clockId = window.setInterval(() => {
      this.setState({ name: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockId);
  }

  render() {
    const { today, name } = this.state;

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
