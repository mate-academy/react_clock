import React from 'react';

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, {}> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      /* eslint-disable no-console */
      console.info(this.state.today.toUTCString().slice(-12, -4));
      /* eslint-enable no-console */
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      /* eslint-disable no-console */
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
      /* eslint-enable no-console */
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

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
