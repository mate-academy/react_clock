import { Component } from 'react';
import './Clock.scss';
import cn from 'classnames';

interface Props {
  name: string
}

interface State {
  time: Date
}

export class Clock extends Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerDateId = 0;

  componentDidMount() {
    this.timerDateId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    // eslint-disable-next-line no-console
    console.info(
      this.state.time.toUTCString().slice(-12, -4),
    );

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerDateId);
  }

  render() {
    const { time } = this.state;
    const clockName = this.props.name;
    const areSecondsEven = time.getSeconds() % 2 === 0;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className={cn(
          'Clock__time',
          {
            'Clock__time--seconds-odd': !areSecondsEven,
            'Clock__time--seconds-even': areSecondsEven,
          },
        )}
        >
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
