import React from 'react';

type Props = {
  name: number,
  isClockVisible: boolean;
};

interface State {
  date: Date,
}

export class Clock extends React.Component<Props, State> {
  clockTimer?: number;

  state: State = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {date.toLocaleTimeString()}
      </>
    );
  }
}
