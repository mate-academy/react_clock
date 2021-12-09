/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date,
};

class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate({ name: prevName }: Props) {
    const { name: curName } = this.props;

    if (prevName !== curName) {
      console.log(`The Clock was renamed from ${prevName} to ${curName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock">
        {date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
