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

  timerId: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const { date } = this.state;

      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed drom ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      this.state.date.toLocaleTimeString()
    );
  }
}
