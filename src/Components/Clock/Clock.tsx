import React from 'react';

const getDate = () => {
  const date = new Date();

  return date.toLocaleTimeString();
};

type Props = {
  useName: string | number,
};

type State = {
  date: string;
};

class Clock extends React.Component<Props, State> {
  state = {
    date: getDate(),
  };

  timer: ReturnType<typeof setInterval> = setInterval(() => (true), 1000);

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: getDate(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.useName;

    if (prevName !== this.props.useName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${this.props.useName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    const { useName } = this.props;

    // eslint-disable-next-line
    console.log(date);

    return (
      <div className="App">
        <h1>{useName}</h1>
        <p>
          Current time:
          {' '}
          {date}
        </p>
      </div>
    );
  }
}

export default Clock;
