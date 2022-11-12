import { Component, ReactNode } from 'react';

type State = {
  dateNow: Date;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state = {
    dateNow: new Date(),
  };

  timeID = 0;

  componentDidMount() {
    this.timeID = window.setInterval(() => {
      this.setState({ dateNow: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.dateNow.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeID);
  }

  render(): ReactNode {
    const { dateNow } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {dateNow.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
