import React, { useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
};

export const Clock: React.FC<Props> = ({ name }) => {
  const [time, setTime] = useState(new Date());
  const [currentName, setCurrentName] = useState(name);

  const firstRender = useRef(true);

  useEffect(() => {
    const timerIdClock = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));

      setTime(currentTime);
    }, 1000);

    return () => {
      window.clearInterval(timerIdClock);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    if (currentName != name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${currentName} to ${name}`);
      setCurrentName(name);
    }
  }, [name]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{name}</strong>

      {' time is '}

      <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};

// type State = {
//   time: Date;
// };

// export class Clock extends React.Component<Props, State> {
//   state: Readonly<State> = {
//     time: new Date(),
//   };

//   timerIdClock = 0;

//   componentDidMount(): void {
//     this.timerIdClock = window.setInterval(() => {
//       this.setState({
//         time: new Date(),
//       });
//     }, 1000);
//   }

//   componentDidUpdate(
//     prevProps: Readonly<Props>,
//     prevState: Readonly<State>,
//   ): void {
//     if (prevProps.name !== this.props.name) {
//       // eslint-disable-next-line no-console
//       console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
//     }

//     if (prevState.time !== this.state.time) {
//       // eslint-disable-next-line no-console
//       console.log(this.state.time.toUTCString().slice(-12, -4));
//     }
//   }

//   componentWillUnmount(): void {
//     window.clearInterval(this.timerIdClock);
//   }

//   render() {
//     const { name } = this.props;
//     const { time } = this.state;
//     const currentTime = time.toUTCString().slice(-12, -4);

//     return (
//       <div className="Clock">
//         <strong className="Clock__name">{name}</strong>

//         {' time is '}

//         <span className="Clock__time">{currentTime}</span>
//       </div>
//     );
//   }
// }
