import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timeTimerId = 0;

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { name } = this.props;
    const { today } = this.state;

    if (((today !== prevState.today))
    ) {
      /* eslint-disable no-console */
      console.info(today.toUTCString().slice(-12, -4));
    }

    if ((name !== prevProps.name)
    ) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeTimerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        <span>
          {' time is '}
        </span>
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
