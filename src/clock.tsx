import { Component } from 'react';

type State = {
  today: string;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toLocaleTimeString(),
  };

  oneSecondTimer = 0;

  componentDidMount() {
    this.oneSecondTimer = window.setInterval(() => {
      this.setState({ today: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.info(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.oneSecondTimer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
