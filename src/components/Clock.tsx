import React from 'react';

interface State {
  today: Date;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      window.console.info(today.toTimeString().slice(0, 8));

      this.setState({ today });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {this.props.name}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {today.toTimeString().slice(0, 8)}
          </span>
        </div>
      </div>
    );
  }
}
