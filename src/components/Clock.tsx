import React from 'react';

export class Clock extends React.Component<{ name?: number }> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId?:number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());

      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate({ name }: { name: number }) {
    if (this.props.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date}
      </p>
    );
  }
}
