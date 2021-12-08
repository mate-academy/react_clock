import React from 'react';

type State = {
  date: string
};

type Props = {
  name: number
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState(
        {
          date: new Date().toLocaleTimeString(),
        },
      );
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name: prevName }:Props) {
    if (this.props.name !== prevName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      this.state.date
    );
  }
}
