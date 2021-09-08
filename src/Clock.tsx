import React from 'react';

type Props = {
  name: number,
};

type LastName = {
  name: number,
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  timer = setInterval(() => {
    // eslint-disable-next-line no-console
    console.log(this.state.time.toLocaleTimeString());

    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(lastProps: LastName): void {
    if (lastProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${lastProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
