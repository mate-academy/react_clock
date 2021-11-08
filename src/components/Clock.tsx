import React from 'react';

type Props = {
  name: number
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 1000);

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(previousProps: Props) {
    const oldName = previousProps.name;

    if (oldName !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}
