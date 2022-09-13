import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(props: Props) {
    if (props.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${props.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const {
      today,
    } = this.state;

    const {
      name,
    } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
