import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends Component< Props, State > {
  state = {
    today: new Date(),
  };

  dateTimer = 0;

  componentDidMount() {
    this.dateTimer = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.dateTimer);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    const date = today.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        time is
        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
