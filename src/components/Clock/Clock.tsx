import React from 'react';

type State = {
  date: Date;
  timerId: NodeJS.Timer | undefined;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({
          date: new Date(),
        });

        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Props) {
    const prevName = prevProps.name;
    const currentName = this.props.name;

    if (prevName !== currentName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
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
