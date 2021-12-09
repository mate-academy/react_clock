import React from 'react';

type State = {
  date: Date;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ clockName: previousName }: Props) {
    const { clockName: newName } = this.props;

    if (previousName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${previousName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <span>
        {date.toLocaleTimeString()}
      </span>
    );
  }
}
