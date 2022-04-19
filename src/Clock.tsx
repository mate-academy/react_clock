// import React from 'react';

// type State = {
//   time: Date;
// };

// type Props = {
//   name: number;
// };

// export class Clock extends React.Component<Props, State> {
//   timerId: NodeJS.Timer = setInterval(() => {}, 0);

//   state = {
//     time: new Date(),
//   };

//   componentDidMount() {
//     this.timerId = setInterval(() => {
//       this.setState({
//         time: new Date(),
//       });
//       // eslint-disable-next-line
//       console.log(this.state.time.toLocaleTimeString());
//     }, 1000);
//   }

//   componentDidUpdate({ name: oldName }: Props) {
//     const { name } = this.props;

//     if (oldName !== name) {
//       // eslint-disable-next-line
//       console.log(`The Clock was renamed from ${oldName} to ${name}`);
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   render() {
//     const { time } = this.state;

//     return (
//       <>
//         <p>
//           {'Current time: '}
//         </p>
//         <p>
//           {time.toLocaleTimeString()}
//         </p>
//       </>
//     );
//   }
// }

// -----------with hooks ------ //
import React, { useEffect, useState, useRef } from 'react';
import { setInterval } from 'timers';

type Props = {
  name: number;
};

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export const Clock: React.FC<Props> = ({ name }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();

      setTime(date);
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const oldName = usePrevious(name);

  useEffect(() => {
    if (oldName !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${name}`);
    }
  }, [name]);

  return (
    <>
      <p>
        {'Current time: '}
      </p>
      <p>
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};
