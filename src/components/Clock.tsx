import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  clockInterval = 0;

  componentDidMount() {
    this.clockInterval = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(`Time ${this.state.date.toLocaleTimeString()}`);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}
