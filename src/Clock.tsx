import React from 'react';

interface Props {
  name: string;
}

interface State {
  time: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  interval: number | undefined;

  componentDidMount(): void {
    this.interval = window.setInterval(this.setNewTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.info(this.correctTimeFormat());
  }

  componentWillUnmount(): void {
    window.clearInterval(this.interval);
  }

  setNewTime = () => {
    this.setState({ time: new Date() });
  };

  correctTimeFormat() {
    return this.state.time.toUTCString().slice(-12, -4);
  }

  render() {
    const {
      name,
    } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.correctTimeFormat()}
        </span>
      </div>
    );
  }
}
