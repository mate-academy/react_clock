import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props> {
  private clockTimer?: number;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        {`Current time: ${date.toLocaleTimeString()}`}
      </p>
    );
  }
}
