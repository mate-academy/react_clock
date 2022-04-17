import React from 'react';

type State = {
  date: string
};

type Props = {
  name: number
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: (new Date()).toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: (new Date()).toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state.date)

    return (
      <>
        {this.state.date}
      </>
    );
  }
}
