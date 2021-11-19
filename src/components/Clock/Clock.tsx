import React from 'react';

type Props = {
  isClockVisible: boolean;
  name: number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId!: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      if (this.props.isClockVisible) {
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${newName}`)
    }
  }

  componentWillUnmount() {
    if (!this.props.isClockVisible) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { isClockVisible } = this.props;
    const { date } = this.state;

    if (isClockVisible) {
      return (
        <span>{date.toLocaleTimeString()}</span>
      );
    }

    return null;
  }
}
