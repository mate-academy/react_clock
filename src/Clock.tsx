import React from 'react';
import Typography from '@mui/material/Typography';

interface State {
  time: string,
}

interface Props {
  name: string,
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  nameMessageInterval: number | undefined;

  componentDidMount(): void {
    window.setInterval(() => this.setState(
      { time: new Date().toUTCString().slice(-12, -4) },
    ), 1000);

    // eslint-disable-next-line no-console
    const interval = window.setInterval(() => console.info(
      new Date().toUTCString().slice(-12, -4),
    ), 1000);

    this.nameMessageInterval = interval;
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.nameMessageInterval) {
      clearInterval(this.nameMessageInterval);
    }
  }

  render(): React.ReactNode {
    const { time } = this.state;
    const { name } = this.props;

    return (

      <Typography
        align="center"
        color="primary"
      >
        <div className="Clock">
          <strong className="Clock__name">
            {name}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {time}
          </span>
        </div>
      </Typography>
    );
  }
}
