/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Component } from 'react';

function FormattedDate(props: { date: { toLocaleTimeString: () => any; }; }) {
  return <h2>{`${props.date.toLocaleTimeString()}.`}</h2>;
}

type Props = {
  name: number;
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerID!: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: newName } = this.props;

    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <FormattedDate date={date} />
      </div>
    );
  }
}
