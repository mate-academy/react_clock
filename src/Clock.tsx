import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.state.time.toLocaleTimeString();
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({ time: 0 });
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    // eslint-disable-next-line no-console
    console.log(time.toLocaleTimeString());

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
