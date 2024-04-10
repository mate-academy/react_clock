import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.PureComponent<Props> {
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
    this.today = window.setInterval(() => {
      this.updateTime();

      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.today);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.newDate}</span>
      </div>
    );
  }
}
