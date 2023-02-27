import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

const formattedDate = (time: Date): string => {
  return time.toUTCString().slice(-12, -4);
};

const setStartTimer = new Date();

// by default new Date sets the time to UTC+0 time zone
// so I added 2 hours to correspond to Kyiv time UTC +2

setStartTimer.setHours(setStartTimer.getHours() + 2);

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: setStartTimer,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const event = new Date();

      event.setHours(event.getHours() + 2);
      this.setState({ currentTime: event });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const previousName = prevProps.name;
    const thisName = this.props.name;

    if (previousName !== thisName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${previousName} to ${thisName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formattedDate(currentTime)}
        </span>
      </div>
    );
  }
}
