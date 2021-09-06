import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  start = setInterval(() => {
    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ time: date.toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.start;
  }

  componentWillUnmount() {
    clearInterval(this.start);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        <h1>{ name }</h1>
        <p>
          Current time:
          {' '}
          {time}
        </p>
      </>
    );
  }
}
