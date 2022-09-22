import { Component } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date,
  clockName: string,
  timerId: number,
  nameId: number,
};

export class Clock extends Component<{}, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    timerId: 0,
    nameId: 0,
  };

  componentDidMount() {
    this.setState({
      timerId: window.setInterval(() => {
        this.setState({ today: new Date() });
        // eslint-disable-next-line react/no-access-state-in-setstate,no-console
        console.info(this.state.today.toLocaleTimeString());
      }, 1000),
    });

    this.setState({
      nameId: window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300),
    });

    document.oncontextmenu = () => true;
  }

  componentWillUnmount() {
    document.oncontextmenu = () => false;
    window.clearInterval(this.state.nameId);
    window.clearInterval(this.state.timerId);
  }

  render() {
    const {
      today,
      clockName,
    } = this.state;

    return (

      <div className="Clock">

        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>

      </div>

    );
  }
}
