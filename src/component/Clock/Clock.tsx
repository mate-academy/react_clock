import React from 'react';

interface Props {
  clockName: string;
}

export class Clock extends React.PureComponent<Props> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));

      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

  componentDidUpdate(
    prevProps: Readonly<{ clockName: string }>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _prevState: Readonly<{}>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
