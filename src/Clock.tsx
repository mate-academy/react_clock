import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
  displayClock: boolean;
};

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
    displayClock: true,
  };

  timerId = 0;

  consoleTime = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.consoleTime = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);

    document.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.button === 2) {
        this.setState({ displayClock: false });
        if (this.state.displayClock === false) {
          clearInterval(this.consoleTime);
        }
      }

      if (event.button === 0) {
        if (this.state.displayClock === false) {
          this.setState({ displayClock: true });
          this.consoleTime = window.setInterval(() => {
            // eslint-disable-next-line no-console
            console.info(this.state.today);
          }, 1000);
        }
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      this.state.displayClock && (
        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )
    );
  }
}
