import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  date : Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const currentName = this.props.name;
    const prevName = prevProps.name;

    if (prevName !== currentName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

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

// const today = new Date();
//   let clockName = 'Clock-0';

//  / / This code starts a timer
//   const timerId = window.setInterval(() => {
//    clockName = getRandomName();
//   }, 3300);

//  / / this code stops the timer
//   window.clearInterval(timerId);
