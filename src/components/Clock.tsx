import React from 'react';

interface Props {
  name: number;
}

interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timer = setInterval(() => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString())
  }, 1000);

  componentDidUpdate(prev: Props) {
    const oldName = prev.name;

    if (oldName !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        {'Current time: '}
        <span>{date.toLocaleTimeString()}</span>
      </p>
    );
  }
}
