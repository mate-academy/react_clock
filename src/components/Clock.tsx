import { Component } from 'react';

type State = {
  today: string
};

type Props = {
  name: string
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  clockID = 0;

  componentDidMount() {
    this.clockID = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const newName = this.props.name;

    if (newName !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockID);
  }

  updateTime = () => {
    const date = new Date().toUTCString().slice(-12, -4);

    this.setState({ today: date });
    // eslint-disable-next-line no-console
    console.info(date);
  };

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name" id="root">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time" id="demo">
          {today}
        </span>
      </div>
    );
  }
}
