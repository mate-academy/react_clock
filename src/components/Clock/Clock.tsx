import React from 'react';

//definiujesz jakie dane przychodzą z rodzica (App)
//Clock nie może istnieć bez tej propsy
type Props = {
  name: string; //to nazwa zegara (Clock-1234)
};

type State = {
  time: string; // przechowuje aktualną godzinę
};

export class Clock extends React.Component<Props, State> {
  // przechowuje ID z setInterval potrzebne, żeby:
  // później zatrzymać timer
  timerId: number | null = null;

  // ustalasz stan początkowy zegara
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  //uruchamia timer, zapisuje jego ID do timerId, dzięki czemu możesz go później zatrzymać
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });

      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  // wywoływane po każdej aktualizacji, porownywanie starej nazwy z nową
  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  // zatrzymuje timer
  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
