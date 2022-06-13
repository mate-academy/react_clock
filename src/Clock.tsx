import React from 'react';

type Props = {
  timerId: NodeJS.Timer,
  name: string,
};

type State = {
  date: Date,
};

class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    id: this.props.timerId,
  };

  componentDidMount() {
    this.state.id = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.id);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { name } = this.props;

    return (
      <>
        <h1>{name}</h1>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

export default Clock;
