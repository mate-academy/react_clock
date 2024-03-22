import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  timeUpdate = 0;

  componentDidMount(): void {
    this.timeUpdate = window.setInterval(() => {
      const today = new Date();

      // eslint-disable-next-line no-console
      console.log(today.toUTCString().slice(-12, -4));
      this.setState({ today });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timeUpdate);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
