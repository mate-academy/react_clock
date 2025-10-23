// -----------------------------First var-----------------------------
// import React from 'react';

// interface ClockProps {
//   name: string;
// }

// interface ClockState {
//   time: string;
// }

// export class Clock extends React.Component<ClockProps, ClockState> {
//   private timerId?: number;

//   // ✅ Инициализация состояния без конструктора
//   state: ClockState = {
//     time: new Date().toUTCString().slice(-12, -4),
//   };

//   componentDidMount() {
//     this.timerId = window.setInterval(() => {
//       const newTime = new Date().toUTCString().slice(-12, -4);

//       // eslint-disable-next-line no-console
//       console.log(newTime);

//       this.setState({ time: newTime });
//     }, 1000);
//   }

//   componentDidUpdate(prevProps: ClockProps) {
//     if (prevProps.name !== this.props.name) {
//       // eslint-disable-next-line no-console
//       console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
//     }
//   }

//   componentWillUnmount() {
//     if (this.timerId) {
//       window.clearInterval(this.timerId);
//     }
//   }

//   render() {
//     return (
//       <div className="Clock">
//         <strong className="Clock__name">{this.props.name}</strong>
//         {' time is '}
//         <span className="Clock__time">{this.state.time}</span>
//       </div>
//     );
//   }
// }

// -----------------------------Second var-----------------------------

import React from 'react';

type Props = {
  name: string;
};

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId: number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
