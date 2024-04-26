import React from 'react';

type Props = {
  today: string;
  name: string;
};

export class Clock extends React.Component<Props> {
  state: Readonly<Props> = {
    today: this.props.today,
    name: this.props.name,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) {
    if (prevProps.name !== this.props.name && prevState) {
      return true;
    }

    return false;
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    getSnapshotBeforeUpdate: boolean,
  ): void {
    if (getSnapshotBeforeUpdate && prevState) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {new Date().toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
