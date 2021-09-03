import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: string,
  counter: NodeJS.Timeout | number,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
    counter: 0,
  };

  componentDidMount() {
    const timerID = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);

    this.setState({ counter: timerID });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    if (this.state.counter) {
      clearInterval(this.state.counter);
    }
  }

  render() {
    return (
      <div>
        {this.state.date}
      </div>
    );
  }
}
