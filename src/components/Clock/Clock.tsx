import { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  date: Date;
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
