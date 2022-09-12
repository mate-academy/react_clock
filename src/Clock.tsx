import React from 'react';

type State = {
  today: string,
};

type Props = {
  clockId: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toLocaleTimeString(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockId } = this.props;

    if (prevProps.clockId !== this.props.clockId) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockId} to ${clockId}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { clockId } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockId}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
