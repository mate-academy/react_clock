import React from 'react';

interface State {
  date: Date,
}

interface Props {
  name: number,
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
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
    if (this.timerId !== null) {
      clearInterval(this.timerId);
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
