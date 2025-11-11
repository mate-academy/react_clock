import React from 'react';

interface State {
  today: string;
}

interface Props {
  name: string;
}

function getTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: getTime(),
  };

  timeId = 0;

  changeTime = () => {
    this.setState({ today: getTime() });
  };

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.changeTime();
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name: clockName } = this.props;

    if (prevProps.name !== clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
