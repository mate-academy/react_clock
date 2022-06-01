import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '00:00:00',
  };

  timerId: NodeJS.Timer | undefined;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div
        data-cy="time"
        className="is-flex is-flex-direction-column is-align-items-center"
      >
        <h1 className="title is-1 has-text-info">{name}</h1>
        <h2 className="subtitle is-2">
          Current time:
          {` ${time}`}
        </h2>
      </div>
    );
  }
}
