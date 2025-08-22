import React from 'react';

interface Props {
  name: string;
}

interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  private timerId?: number;
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  tick() {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toUTCString().slice(-12, -4));
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        {this.props.name} time is {this.state.date.toUTCString().slice(-12, -4)}
      </div>
    );
  }
}
