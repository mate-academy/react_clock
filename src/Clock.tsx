import { Component } from 'react';

type State = {
  today: Date,
};
type Props = {
  name: string,
};

export default class Clock extends Component<Props> {
  state:State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date();

      // eslint-disable-next-line no-console
      console.info(time.toUTCString().slice(-12, -4));

      this.setState({ today: time });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps !== this.props) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          { this.state.today.toUTCString().slice(-12, -4) }
        </span>
      </div>
    );
  }
}
