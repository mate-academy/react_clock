import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
    timerID: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerID = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    return (
      <span>
        {this.state.date}
      </span>
    );
  }
}
