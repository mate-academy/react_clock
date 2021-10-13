import React from 'react';

interface Position {
  top: string;
  left: string;
}

interface Watch {
  position: Position;
}

type Props = {
  watch: Watch;
};

type State = {
  date: string;
};

export class OpenWatch extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timer: ReturnType<typeof setTimeout> | undefined;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { date } = this.state;
    const { watch } = this.props;
    const mesuareOfTime = (time: string, index1: number, index2: number) => `${time[index1]}${time[index2]}`;

    return (
      <div className="display__time time" style={watch.position}>
        <span className="time__hours">{mesuareOfTime(date, 0, 1)}</span>
        <span className={`time__colon${+mesuareOfTime(date, 6, 7) % 2 === 0 && '--hidden'}`}>:</span>
        <span className="time__minutes">{mesuareOfTime(date, 3, 4)}</span>
        <span className="time__seconds">{mesuareOfTime(date, 6, 7)}</span>
      </div>
    );
  }
}
