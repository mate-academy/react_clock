import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  setInterval = setInterval(() => {
    this.state.time.toLocaleTimeString();

    // eslint-disable-next-line no-console
    console.log(this.state.time.toLocaleTimeString());

    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.setInterval;
  }

  componentWillUnmount() {
    clearInterval(this.setInterval);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <>
        <p>
          {`Name: ${name}`}
        </p>
        <p>Current time:</p>
        <div>{time.toLocaleTimeString()}</div>
      </>
    );
  }
}
