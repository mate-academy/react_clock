import React from 'react';

type Prop = {
  name: string;
};

type State = {
  today: Date
};

export class Clock extends React.Component<Prop, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line no-console
      console.info(this.normalizeData(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Prop>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  normalizeData = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.normalizeData(this.state.today)}
        </span>
      </div>
    );
  }
}
