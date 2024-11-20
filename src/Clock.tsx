import * as React from 'react';
import './App.scss';

type Props = {
  name: string;
};

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component<Props> {
  state = {
    currentTime: new Date(),
  };

  timerTime = 0;

  componentDidMount(): void {
    this.startClockUpdate();
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTime);
  }

  startClockUpdate = () => {
    this.timerTime = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  };

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
