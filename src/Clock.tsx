import React from 'react';


type State = {
  today: Date,
};

type Props = {
  id: number,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  updateTime = 0;

  componentDidMount() {
    this.updateTime = window.setInterval(() => {
      const date = new Date();

      this.setState({
        today: date,
      });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.id !== prevProps.id) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from Clock-${prevProps.id} to Clock-${this.props.id}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.updateTime);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          Clock-
          {this.props.id}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
