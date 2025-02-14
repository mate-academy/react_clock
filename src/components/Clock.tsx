import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  updateTime = () => {
    this.setState({ time: new Date() });
    // eslint-disable-next-line no-console
    // console.log(new Date().toUTCString().slice(-12, -4));
  };

  timer = 0;

  componentDidUpdate(prevProps: Readonly<{}>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(new Date().toUTCString().slice(-12, -4));
  }

  componentDidMount(): void {
    this.timer = window.setInterval(this.updateTime, 1000);
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
