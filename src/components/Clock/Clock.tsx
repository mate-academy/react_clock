import React from 'react';

export type Props = {
  name: number;
};

export type State1 = {
  date: Date;
  timerId?: NodeJS.Timer;
};

export class Clock extends React.Component<Props, State1> {
  state = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    this.setState({ timerId: setInterval(this.newDate, 1000) });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      //@ts-ignore
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  newDate = () => {
    this.setState({ date: new Date() });
    //@ts-ignore
    console.log(this.state.date.toLocaleTimeString());
  };

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
