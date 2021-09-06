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
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prev: Props) {
    const oldName = prev.name;

    return (oldName === this.props.name
    // eslint-disable-next-line
    ? console.log(this.state.date.toLocaleTimeString())
    // eslint-disable-next-line
    : console.log(`The Clock was renamed from ${oldName} to ${this.props.name}`))
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
