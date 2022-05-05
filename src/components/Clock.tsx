import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date | string,
  timerId: NodeJS.Timer,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: '',
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidUpdate(prevProps: any) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log('The Clock was renamed from oldName to newName');
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <span>
        {date}
      </span>
    );
  }
}
