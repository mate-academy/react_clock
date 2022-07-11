import { Component, ReactNode } from 'react';

type Props = {
  name: string;
};

type State = {
  date: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date().toLocaleTimeString(),
  };

  interval = 0;

  componentDidMount() {
    this.interval = window.setInterval(this.handleDocument, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prevName } = prevProps;
    const { name: currName } = this.props;

    if (prevName !== currName) {
      window.console.log(`The clock was renamed from ${prevName} to ${currName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  handleDocument = () => {
    const date = new Date().toLocaleTimeString();

    this.setState({ date });
    window.console.log(date);
  };

  render(): ReactNode {
    return (
      <>
        <p>{this.props.name}</p>
        {`Current time is ${this.state.date}`}
      </>
    );
  }
}
