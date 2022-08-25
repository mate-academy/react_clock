import { Component } from 'react';

type Props = {
  name: string
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  dateTimer = 0;

  componentDidMount() {
    // const date = new Date();

    this.dateTimer = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`Renamed from <${prevProps.name}> to <${this.props.name}>`);
    }
  }

  // this code stops the timer
  componentWillUnmount() {
    window.clearInterval(this.dateTimer);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;
    const timeString = date.toLocaleTimeString();

    return (
      <>
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          { timeString }
        </span>
      </>

    );
  }
}
