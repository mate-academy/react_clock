import React from 'react';
import { getActualDate } from '../helpers/helpers';

type Props = {
  hasClock: boolean;
  name: string;
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: getActualDate(),
  };

  timerDate = 0;

  componentDidMount(): void {
    this.timerDate = window.setInterval(() => {
      this.setState({
        date: getActualDate(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (this.state.date !== prevState.date && this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerDate);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    {
      return (
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>

          {' time is '}

          <span className="Clock__time">{date}</span>
        </div>
      );
    }
  }
}
