import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
    timerId: setInterval(() => {}),
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ date: new Date() });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());

    return (
      <>
        {date.toLocaleTimeString()}
      </>
    );
  }
}
