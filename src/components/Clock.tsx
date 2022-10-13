import { Component } from 'react';

type Prop = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Prop, State> {
  state = {
    date: new Date(),
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(this.setNewDate, 1000);
  }

  componentDidUpdate(prevProps:Prop) {
    // eslint-disable-next-line no-console
    console.info(this.state.date.toUTCString().slice(-12, -4));
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

  setNewDate = ():void => {
    this.setState({ date: new Date() });
  };

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
