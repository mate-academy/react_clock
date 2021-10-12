import React from 'react';

interface Props {
  name: number,
}

interface State {
  date: Date,
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  counter = setInterval(() => {
    const { date } = this.state;

    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.counter;
  }

  componentDidUpdate(prevProps: Props) {
    const { name: previousName } = prevProps;
    const { name: currentName } = this.props;

    if (previousName !== currentName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps} to ${this.props}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    return (
      this.state.date.toLocaleTimeString()
    );
  }
}
