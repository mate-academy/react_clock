import { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
}

export class Clock extends Component<Props, State> {
  timerId = 0;

  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.getTime();
      // eslint-disable-next-line
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // eslint-disable-next-line
    prevProps.name !== this.props.name && console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  getTime() {
    this.setState({ today: new Date() });
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
