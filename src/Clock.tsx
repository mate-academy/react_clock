import React from 'react';


type Props = {
  name: string;
};


export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  timerId: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today);
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const today = new Date();
    let clockName = 'Clock-0';

    // This code starts a timer
    const timerId = window.setInterval(() => {
      clockName = getRandomName();
    }, 3300);

    // this code stops the timer
    window.clearInterval(timerId);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
