import React from 'react';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

function getDate(): string {
  const value = new Date().toUTCString().slice(-12, -4);

  return value;
}

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: getDate(),
  };

  timer = 0;

  timerId = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ today: getDate() });
    }, 1000);

    // this.timerId = window.setInterval(() => {
    //   this.props.name
    //    name: getRandomName() ;
    // }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
