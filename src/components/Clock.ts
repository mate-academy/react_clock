import React from 'react';

type State = {
  now: Date;
};

export class Clock extends React.Component<{ name?: number }, State> {
  state: State = {
    now: new Date(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(this.set, 1000);
  }

  componentDidUpdate({ name }: { name: number }) {
    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    return this.timerId && clearInterval(this.timerId);
  }

  set = () => {
    this.setState({ now: new Date() });

    // eslint-disable-next-line no-console
    console.log(this.state.now.toLocaleTimeString());
  };

  render() {
    return this.state.now.toLocaleTimeString();
  }
}
