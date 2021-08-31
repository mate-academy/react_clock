import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timer: undefined | NodeJS.Timeout;

  componentDidMount() {
    this.timer = setInterval(
      () => {
        this.setState({
          date: new Date().toLocaleTimeString(),
        });
        // eslint-disable-next-line
        console.log(`Clock ${this.props.name} time: ${this.state.date}`);
      },
      1000,
    );
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: currentName } = this.props;

    if (oldName !== currentName) {
      // eslint-disable-next-line
      console.log(`The clock was renamed from ${oldName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <h2>{`Clock ${name} time:`}</h2>
        <div>{date}</div>
      </>
    );
  }
}
