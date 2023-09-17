import React from 'react';
import { getNewDate } from '../../helpers/getCurrentTime';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: getNewDate(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: getNewDate() });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name: prevName } = prevProps;
    const { name: newName } = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
