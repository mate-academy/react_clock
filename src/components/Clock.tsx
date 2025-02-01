import React from 'react';

type Props = {
  name: string;
};

type State = {
  updatedTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    updatedTime: '',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState(
        { updatedTime: new Date().toUTCString().slice(-12, -4) },
        () => {
          // eslint-disable-next-line no-console
          console.log(this.state.updatedTime);
        },
      );
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const nameChanged = this.props.name !== prevProps.name;

    if (nameChanged) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {new Date().toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
