import React from 'react';

type Props = {
  name: string;
  visible: boolean;
  timerId: number;
};

export class Clock extends React.Component<Props> {
  state = {
    newDate: new Date().toUTCString().slice(-12, -4),
  };

  today = 0;

  updateTime = () => {
    this.setState({
      newDate: new Date().toUTCString().slice(-12, -4),
    });
  };

  componentDidMount(): void {
    this.today = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (!prevProps.visible) {
      this.updateTime();
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    } else if (this.props.visible) {
      // eslint-disable-next-line no-console
      console.log(this.state.newDate);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.today);
  }

  render() {
    const { name, visible } = this.props;

    return (
      visible && (
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>

          {' time is '}

          <span className="Clock__time">{this.state.newDate}</span>
        </div>
      )
    );
  }
}
