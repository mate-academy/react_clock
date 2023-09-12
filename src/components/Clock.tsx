import React from 'react';

function formatedTime(time: Date) {
  return time.toUTCString().slice(-12, -4);
}

type Props = {
  name: string,
  handleRightClick: (event: MouseEvent) => void,
  handleLeftClick: (event: MouseEvent) => void,
};

type State = {
  today: Date,
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.props.handleRightClick);
    document.removeEventListener('click', this.props.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(formatedTime(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.addEventListener('click', this.props.handleLeftClick);
    document.removeEventListener('contextmenu', this.props.handleRightClick);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatedTime(today)}
        </span>
      </div>
    );
  }
}
