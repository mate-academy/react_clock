import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  intervalId = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.intervalId;
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const time = this.state.date.toLocaleTimeString();

    return oldName !== this.props.name
    // eslint-disable-next-line
    ? console.log(`Clock was renamed from ${oldName} to ${this.props.name}`)
    // eslint-disable-next-line
    : console.log(time);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    // eslint-disable-next-line
    console.log(`Clock was stopped`);
  }

  render() {
    const { name } = this.props;

    return (
      <>
        <p className="App__clockName">
          Current time №:
          {name}
        </p>
        <p className="App__clockTime">
          <b>{this.state.date.toLocaleTimeString()}</b>
        </p>
      </>
    );
  }
}
