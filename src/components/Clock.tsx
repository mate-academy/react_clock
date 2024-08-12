import React from 'react';
type ClockProps = {
  name: string;
};
type ClockState = {
  currentTime: string;
};
export class Clock extends React.Component<ClockProps, ClockState> {
  private timerId?: number;
  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);
      // eslint-disable-next-line no-console
      console.log(newTime);
      this.setState({ currentTime: newTime });
    }, 1000);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }
  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }
  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }
  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ currentTime: '' });
  };
  handleLeftClick = () => {
    this.setState({ currentTime: new Date().toUTCString().slice(-12, -4) });
  };
  render() {
    const { name } = this.props;
    const { currentTime } = this.state;
    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
