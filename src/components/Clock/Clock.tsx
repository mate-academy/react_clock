import React from 'react';
import './Clock.scss';

type State = {
  date: Date;
  timerId: NodeJS.Timeout | null;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props> {
  state: State = {
    date: new Date(),
    timerId: null,
  };

  componentDidMount() {
    this.setState(
      {
        timerId: setInterval(() => {
          this.setState({
            date: new Date(),
          });
          // eslint-disable-next-line
          console.log(this.state.date.toLocaleTimeString());
        }, 1000),
      },
    );
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearTimeout(this.state.timerId);
    }
  }

  render() {
    return (
      <div className="Clock ">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
export default Clock;
