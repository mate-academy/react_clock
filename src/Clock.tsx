/* eslint-disable */
import { Component } from 'react';

type Props = {
  name: string,
};

export class Clock extends Component<Props> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  currentTime = () => {
    this.setState(({ date: new Date().toLocaleTimeString() }));
  };

  updateTime = () => {
    console.info(new Date().toLocaleTimeString());
  };

  test: any = null;

  componentDidMount() {
    setInterval(this.currentTime, 1000);
    this.test = setInterval(() => console.info(new Date().toLocaleTimeString()), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.test);
  }

  render() {
    const time = this.state.date;

    const clockName = this.props.name;

    return (

      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>

    );
  }
}
