import React from 'react';

type Props = {
  name: string;
};

type State = {
  clock: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    clock: new Date(),
  };

  today = new Date();

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.today = new Date();
      this.setState({ clock: this.today });

      // eslint-disable-next-line no-console
      console.log(this.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
