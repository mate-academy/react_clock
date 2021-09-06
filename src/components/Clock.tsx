import React from 'react';

interface State {
  date: Date;
}

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;

    return oldName !== this.props.name
      // eslint-disable-next-line
      ? console.log(`The Clock was renamed from ${oldName} to ${this.props.name}`)
      // eslint-disable-next-line
      : console.log(this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <>
        <p>
          Clock Name:
          {' '}
          {name}
        </p>
        <p>
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
