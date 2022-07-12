/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timer = 0;

  componentDidMount() {
    document.addEventListener(
      'contextmenu',
      event => event.preventDefault(),
    );

    this.timer = window.setInterval(() => {
      const date = new Date();

      console.log(date.toLocaleString());

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="box has-text-centered">
        <h3 className="subtitle is-size-5">{this.props.name}</h3>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
