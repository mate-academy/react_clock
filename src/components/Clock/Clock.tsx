import React from 'react';

interface Props {
  name: number;
}

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    if (this.state.timerId > 0) {
      return;
    }

    this.state.timerId = (setInterval as Window['setInterval'])(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name === name) {
      return;
    }

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </p>
    );
  }
}
