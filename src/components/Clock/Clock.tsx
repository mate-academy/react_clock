import React from 'react';

type State = {
  date: string,
};

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, State> {
  clockInterval?: number;

  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.clockInterval = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
      if (this.props.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {date}
      </>
    );
  }
}
