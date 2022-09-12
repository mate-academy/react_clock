import { Component } from 'react';

type Props = {
  clockName: string
};

type State = {
  today: Date
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    // eslint-disable-next-line no-console
    console.info(this.state.today.toLocaleTimeString());
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}

// import { Component } from 'react';

// type Props = {
//   clockName: string
// };

// type State = {
//   today: Date
// };

// export class Clock extends Component<Props, State> {
//   state: Readonly<State> = {
//     today: new Date(),
//   };

//   // prevTime = this.props.clockName;

//   // console.log(this.props.prevTime);
//   // console.log(this.prevTime);
//   // почему клок нейм тут не оставить? а передавать его надо из App?
//   // это условие задания но неясно может ли оно работать и тут несмотря на условия?

//   // тут я перезаписываю мой статичный today: new Date(),
//   // написав тот же today: new Date(), но обновляю его каждую секунду
//   componentDidMount() {
// window тут написано так как в браузере setInterval кидает число
// а в нод js объект поэтому мы пишем что window то есть используй интервал браузера
//     const timerId = window.setInterval(() => {
//       this.setState({ today: new Date() });
//     }, 1000);

//     // включается только один раз
//     // console.info(this.state.today.toLocaleTimeString());
//   }

//   // если взять параметры в фигурные скобки то просто андефайенды идут
//   // 2й параметр componentDidUpdate отображает state
//   // а 1й параметр это то что было передано из другого класса
//   componentDidUpdate(prev: Props, current: State) {
//     // console.log(prev, current);
//     // console.log(this.props.className);
//     // я походу сделал ссылку и оно потом в догонку на одной строке сразу меняется
//     // let prevTime = this.props.clockName;
//     // console.log(this.prevTime);
//     // console.log(prevTime);
//     // const { clockName } = this.props;
//     // console.log(clockName);
//     // console.log(clockName);
//     // console.log(this.props.k);
//     // eslint-disable-next-line no-console
//     // console.debug(`Renamed from ${clockName} to ${clockName}`);
//     // мой prevTime не меняется
//     // console.debug(`Renamed from ${this.prevTime} to ${clockName}`);
//     // что то меняет но не то что надо
//     // console.debug(`Renamed from ${prevTime} to ${clockName}`);
//     // console.debug(`Renamed from ${clockName} to ${this.state.today}`);
//     // меняется но тут походу надо выдержать 3х секундную паузу и тогда норм будет
//     // а так сейчас идет дублирование три раза и на 4й смена
//     // console.debug(`Renamed from ${prev.clockName} to ${this.props.clockName}`);
//     // заработало!!!!
//     // поскольку как я писал ранее есть дублирование три раза то я просто отлавливаю 4й случай когда они не равны
//     // и вывожу console.debug и получчаю разные значенеия, это происходит так как
//     // функция getRandomName() через 3 секунды меняет clockName то есть на 4й есть уже изменения
//     if (prev.clockName !== this.props.clockName) {
//       // eslint-disable-next-line no-console
//       console.debug(`Renamed from ${prev.clockName} to ${this.props.clockName}`);
//     }
//     // иногда проскакивает дублированые значения что с ними делать
//     // как только скрываю часы через событие правой кнопкой в ап то часы перестают работать
//     // а значит и этот код с выводом инфо тоже не работает
//     // иногда 5 раз проскакивает
//     // eslint-disable-next-line no-console
//     console.info(this.state.today.toLocaleTimeString());
//   }

//   // componentWillUnmount(): {

//   // }

//   // непонятная ошибка
//   // Can't perform a React state update on an unmounted component.
//   // This is a no-op, but it indicates a memory leak in your application.
//   // To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

//   render() {
//     // переданые данные в класс отображаються в рендере
//     const { clockName } = this.props;
//     const { today } = this.state;
//     // выводит значение но ломает вывод на экране
//     // так как в 37 строке все ломалось
//     // console.log( this.props.clockName);
//     // console.log(clockName);
//     // если не писать шо пропс то идет андефайнд
//     // console.log(this.clockName);

//     //   как бы у нас появляется обект
//     //   props = {
//     //     clockName: "nnamdi"
//     //  }
//     // и мы к нему обращаемся
//     // при конструкторе это было бы очевидно
//     // props это походу спец обект с закрепленным именем в классовых компонентах
//     // Если это класс, React создаёт его экземпляр, используя ключевое слово new,
//     // затем передает этот экземпляр в объект props и вызывает метод render.

//     return (
//       <div className="Clock">
//         <strong className="Clock__name">
//           {clockName}
//         </strong>

//         {' time is '}

//         <span className="Clock__time">
//           {today.toLocaleTimeString()}
//         </span>
//       </div>
//     );
//   }
// }
