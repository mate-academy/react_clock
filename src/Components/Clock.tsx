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

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
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
