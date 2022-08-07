import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date().toLocaleTimeString(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong>
          {this.props.name}
        </strong>
        {' time is '}
        <span>
          {this.state.date}
        </span>
      </div>
    );
  }
}
