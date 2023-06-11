import React from 'react';
import Typography from '@mui/material/Typography';

interface State {
  time: string,
  interval: number | null,
}

interface Props {
  name: string,
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
    interval: null,
  };

  componentDidMount(): void {
    window.setInterval(() => this.setState(
      { time: new Date().toUTCString().slice(-12, -4) },
    ), 1000);

    // eslint-disable-next-line no-console
    const interval = window.setInterval(() => console.info(
      new Date().toUTCString().slice(-12, -4),
    ), 1000);

    this.setState({ interval });
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  render(): React.ReactNode {
    return (

      <Typography
        align="center"
        color="primary"
      >
        <div className="Clock">
          <strong className="Clock__name">
            {this.props.name}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.time}
          </span>
        </div>
      </Typography>
    );
  }
}
