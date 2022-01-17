import React from 'react';

type Props = {
  name: number;
};

type State = {
  timerId: NodeJS.Timer | undefined;
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ date: new Date() });

        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: { name: number; }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}
