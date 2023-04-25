import { Component } from 'react';

type Props = {
  clockName: string
};

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<Props> {
  state = {
    today: new Date(),
    clockName: this.props.clockName,
  };

  nameTimerId: any;

  timeTimerId: any;

  componentDidMount() {
    this.nameTimerId = setInterval(() => {
      const oldName = this.state.clockName;
      const newName = getRandomName();

      this.setState({ clockName: newName });

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }, 3300);

    this.timeTimerId = setInterval(() => {
      const { today } = this.state;

      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeTimerId);
    clearInterval(this.nameTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
