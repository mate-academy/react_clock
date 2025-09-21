import React from 'react';

interface Props {
  name: string;
  onContextMenu: (event: MouseEvent) => void;
  onClick: () => void;
}

interface State {
  currentTime: Date;
}

export class Clock extends React.PureComponent<Props> {
  state: State = {
    currentTime: new Date(),
  };

  currentTimeId: number = 0;

  componentDidMount(): void {
    this.currentTimeId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);

    document.addEventListener('contextmenu', this.props.onContextMenu);
    document.removeEventListener('click', this.props.onClick);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.currentTimeId);
    document.removeEventListener('contextmenu', this.props.onContextMenu);
    document.addEventListener('click', this.props.onClick);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
