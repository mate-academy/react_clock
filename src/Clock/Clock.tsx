import React from 'react';

interface Props {
  name: string;
  time: string;
}

interface State {
  interval: number | null;
}

export class Clock extends React.Component<Props, State> {
  state = {
    interval: null,
  };

  componentDidMount(): void {
    const interval = window.setInterval(this.showInfo, 1000);

    this.setState({ interval });
  }

  componentWillUnmount(): void {
    if (this.state.interval) {
      window.clearInterval(this.state.interval);
    }
  }

  showInfo = () => {
    // eslint-disable-next-line no-console
    console.info(this.props.time);
  };

  render() {
    const { name, time } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
