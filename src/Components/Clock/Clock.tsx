import React from 'react';
import { formatTime } from '../../helpers/helpers';

interface Props {
  name: number
}

interface State {
  currentDate: Date,
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
      // eslint-disable-next-line no-console
      console.info(formatTime(this.state.currentDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from Clock-${prevProps.name} to Clock-${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {`Clock-${name}`}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatTime(currentDate)}
        </span>
      </div>
    );
  }
}
