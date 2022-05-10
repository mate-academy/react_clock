import React from 'react';
import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timer;

  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const dateToShow = new Date().toLocaleTimeString();

      this.setState({ date: dateToShow });

      // eslint-disable-next-line no-console
      console.log(dateToShow);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <p data-cy="time" className="Clock__title">
          Current time:
        </p>
        <div className="Clock__timer">
          {this.state.date}
        </div>
      </div>
    );
  }
}
