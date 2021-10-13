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

  counter: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.counter = setInterval(() => {
      const { date } = this.state;

      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);

    return this.counter;
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.counter) {
      clearInterval(this.counter);
    }
  }

  render() {
    return (
      this.state.date.toLocaleTimeString()
    );
  }
}
