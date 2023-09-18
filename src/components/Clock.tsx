import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

const sliceStart = -12;
const sliceEnd = -4;

const normalizedDate = (date: Date) => date
  .toUTCString().slice(sliceStart, sliceEnd);

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(normalizedDate(this.state.today));
    }, 1000);
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
  ): boolean {
    return nextProps.name !== this.props.name
      || nextState.today !== this.state.today;
  }

  componentDidUpdate({ name: prevName }: Props): void {
    const { name } = this.props;

    if (prevName !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {normalizedDate(today)}
        </span>
      </div>
    );
  }
}
