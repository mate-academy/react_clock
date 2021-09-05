import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: Date;
};

class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  time = setInterval(() => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.time;
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
