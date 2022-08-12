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

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line
		console.log(this.state.date);
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    const newName = this.props.name;

    if (oldName.name !== newName) {
      // eslint-disable-next-line
      console.log(`Renamed from ${oldName.name} to ${newName}`)
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const date = this.state.date.toLocaleTimeString();
    const nameClock = this.props.name;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {nameClock}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
