import React from 'react';

interface Props {
  name: string;
}

interface State {
  currentTime: Date;
}

function getFormattedTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date(),
  };

  private timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(previousProps: Props): void {
    const { name } = this.props;

    if (previousProps.name !== name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${previousProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  updateTime = (): void => {
    const currentTime = new Date();
    const formattedTime = getFormattedTime(currentTime);

    this.setState({ currentTime });

    // eslint-disable-next-line no-console
    console.log(formattedTime);
  };

  render(): React.ReactNode {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {getFormattedTime(currentTime)}
        </span>
      </div>
    );
  }
}
