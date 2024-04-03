import React from 'react';

type Props = {
  name: string;
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date().toUTCString().slice(-12, -4),
  };

  dateID = 0;

  componentDidMount() {
    this.dateID = window.setInterval(() => {
      this.setState({ date: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval((this.dateID = 0));
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.date !== this.state.date) {
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.date}</span>
      </div>
    );
  }
}
