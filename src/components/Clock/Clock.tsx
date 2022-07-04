import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: Date;
  timerId?: NodeJS.Timeout;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: newName } = this.props;

    if (oldName === newName) {
      return;
    }

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  }

  componentWillUnmount() {
    if (this.state.timerId !== undefined) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <span data-cy="time">
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}
