import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
          {' PM '}
        </span>
      </div>
    );
  }
}
