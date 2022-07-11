import { Component } from 'react';

interface Props {
  name: string,
}

type State = {
  date: Date,
};

class Clock extends Component <Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: newName } = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <strong>{this.props.name}</strong>
        {' time is '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
