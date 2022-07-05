import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date,
};

class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: newName } = this.props;

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    return (
      <p data-cy="time">
        Current time:
        {' '}
        {date.toLocaleTimeString()}
        {' '}
        Name:
        {name}
      </p>
    );
  }
}

export default Clock;
