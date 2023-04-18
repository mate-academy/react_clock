import React from 'react';

function getCurrentDate(): string {
  const today = new Date();

  return today.toUTCString().slice(-12, -4).toString();
}

type Prop = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Prop, State> {
  state = {
    today: getCurrentDate(),
  };

  timmer = 0;

  componentDidMount() {
    this.timmer = window.setInterval(() => {
      this.setState({
        today: getCurrentDate(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Prop>) {
    const prevName = prevProps.name;
    const currName = this.props.name;

    if (prevName !== currName) {
      console.debug(`Renamed from ${prevName} to ${currName}`); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timmer);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          { name }
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
