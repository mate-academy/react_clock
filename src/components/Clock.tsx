import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  setTime = setInterval(() => {
    this.setState({ date: new Date() });

    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.setTime;
  }

  componentDidUpdate({ name }:Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line
    console.log(`The clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <div>{name}</div>
        <div>
          {`Current time: ${date.toLocaleTimeString()}`}
        </div>
      </>
    );
  }
}
