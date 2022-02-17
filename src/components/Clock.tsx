import React from 'react';

interface State {
  timerId: NodeJS.Timeout | null,
  date: Date,
}

interface Props {
  name: number,
}

export class Clock extends React.Component<Props, State> {
  state = {
    timerId: null,
    date: new Date(),
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);

    this.setState({ timerId });
  }

  componentDidUpdate(pervProps: Props) {
    const prev = pervProps.name;
    const now = this.props.name;

    if (prev !== now) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prev} to ${now}`);
    }
  }

  componentWillUnmount() {
    if (this.state.timerId !== null) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <h1>
        {'Current time: '}
        {this.state.date.toLocaleTimeString()}
      </h1>
    );
  }
}
