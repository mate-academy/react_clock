import React from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timesId = 0;

  componentDidMount() {
    this.timesId = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.info(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldProps = prevProps.name;
    const newProps = this.props.name;

    if (oldProps !== newProps) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${oldProps} to ${newProps}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timesId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
