import React from 'react';
import './App.scss';

interface Props {
  from: number;
}

interface State {
  count: number;
}

export class Countdown extends React.Component<Props, State> {
  state = {
    count: this.props.from,
  };

  intervalId?: NodeJS.Timer;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.intervalId && this.state.count === 1) {
        clearInterval(this.intervalId);
      }

      this.setState((prev) => ({
        count: prev.count - 1,
      }));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.from !== prevProps.from) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ count: this.props.from });
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <p>{count || 'Done!'}</p>

      </div>
    );
  }
}
