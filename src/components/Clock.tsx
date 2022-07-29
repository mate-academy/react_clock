import React from 'react';

type Props = {
  name: string
};

type State = {
  date: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      // console.log('fff')
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date}
        </span>
      </div>
    );
  }
}
