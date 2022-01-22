import React from 'react';

type State = {
  date: Date,
};

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(
      this.clockMethod,
      1000,
    );
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  clockMethod = () => {
    this.setState({ date: new Date() });

    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  };

  render() {
    return (
      <>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <p>{`Name: ${this.props.name}`}</p>
      </>
    );
  }
}
