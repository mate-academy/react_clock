import React from 'react';
interface Props {
  name: string;
}

interface State {
  timer: string;
}

export class Clock extends React.Component<Props, State> {
  private timerId: number | undefined;

  state: Readonly<State> = {
    timer: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        timer: new Date().toUTCString().slice(-12, -4),
      });
      //eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { timer } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}
        <span className="Clock__time">{timer}</span>
      </div>
    );
  }
}
