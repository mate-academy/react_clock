import React from 'react';

type State = {
  date: Date;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  private clock?: number;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.clock = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
