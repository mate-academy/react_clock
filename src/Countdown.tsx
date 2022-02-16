/* eslint-disable no-console */
import React from 'react';

type Props = { from: number };
type State = { count: number };

export class Countdown extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.setState({
      count: this.props.from,
    });

    this.timerId = setInterval(() => {
      if (this.timerId && this.state.count === 1) {
        clearInterval(this.timerId);
      }

      // eslint-disable-next-line
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.from !== this.props.from) {
      this.setState({
        count: this.props.from,
      });
    }
  }

  componentWillUnmount() {
    console.log('Timer stopped');

    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    // const { from } = this.props;
    const { count } = this.state;

    return (
      <p>{count || 'Done!'}</p>
    );
  }
}
