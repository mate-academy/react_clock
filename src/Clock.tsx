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
      const date = new Date().toLocaleTimeString();

      this.setState({ date });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleDocument);
  }

  handleDocument = () => {
    const date = new Date().toLocaleTimeString();

    this.setState({ date });
  };

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
