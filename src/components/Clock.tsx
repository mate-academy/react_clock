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

  timerInterval = 0;

  componentDidMount() {
    this.timerInterval = window.setInterval(this.handleDocument, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: newName } = this.props;

    if (oldName !== newName) {
      window.console.log(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerInterval);
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
        {`time is ${this.state.date}`}
      </>
    );
  }
}
