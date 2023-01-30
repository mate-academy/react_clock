import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(this.runTime, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

  runTime = () => {
    const today = new Date();

    this.setState({ today });

    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render() {
    const { today } = this.state;
    const { name } = this.props;

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
