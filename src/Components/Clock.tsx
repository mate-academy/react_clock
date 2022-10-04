import { Component } from 'react';

type State = {
  today: Date;
};

type NameProp = {
  name: string;
};

export class Clock extends Component<NameProp, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({
        today: now,
      });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
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
        </span>
      </div>
    );
  }
}
