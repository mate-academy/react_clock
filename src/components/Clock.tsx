import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  clockName: string
}

interface State {
  today: Date,
}

export class Clock extends React.PureComponent<Props, State> {
  state = {
    today: new Date(),
  };

  todayTimerId = 0;

  componentDidMount() {
    this.todayTimerId = window.setInterval(() => {
      const today = new Date();

      // eslint-disable-next-line no-console
      console.info(today.toUTCString().slice(-12, -4));

      this.setState({ today });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.todayTimerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
