import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });

      // eslint-disable-next-line
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // Readonly is not a simple type but a TypeScript modifier
  // It creates a new type with all the properties of the original type set as read-only
  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const today = this.state.currentTime.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
