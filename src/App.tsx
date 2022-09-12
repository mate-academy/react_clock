import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.showClock.bind(this));
    document.removeEventListener('contextmenu', this.hideClock);
    window.clearInterval(this.timerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    // console.log('right btn');
  };

  showClock() {
    // console.log('left btn', this);
    this.setState({ hasClock: true });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

// import { Component } from 'react';
// import { Clock } from './components/Clock';
// import './App.scss';

// type State = {
//   clockName: string,
//   hasClock: boolean,
// };

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);
//   // const value = Date.now().toString().slice(-4);

//   // console.log(value);

//   return `Clock-${value}`;
// }

// export class App extends Component<{}, State> {
//   state = {
//     clockName: 'Clock-0',
//     hasClock: true,
//   };

//   // today = new Date();

//   componentDidMount() {
//     // This code starts a timer
//     // почему если я переношу этот код в часы то getRandomName() ничего не обновляет
//     // даже если я его перенес в часы тоже
//     const timerId = window.setInterval(() => {
//       // this.clockName = getRandomName();
//       // это нужно чтобы каждые 3 сек менялось состояние
//       // clockName что мы передаем в класс клок
//       // и там оно в верстке отображается
//       // цифры генерит функция getRandomName
//       // только теперь у меня куча ивент лисенеров
//       // на правую и левую кнопку
//       // а теперь я ничего не делал и нормально все стало с событиями
//       // а теперь снова сломалось
//       this.setState({ clockName: getRandomName() });
//     }, 3300);

//     // console.log(timerId);

//     // document.addEventListener('contextmenu', (event) => {
//     //   event.preventDefault();
//     //   this.setState({ hasClock: false });
//     //   console.log('right btn');
//     // });

//     document.addEventListener('contextmenu', this.hideClock);

//     // работает!!!!!
//     // навереное из за того что функцию showClock связал именно с
//     //  componentDidMount или классом фп и избавился от this функции
//     document.addEventListener('click', this.showClock.bind(this));

//     // console.info(timerId);
//   }

//   componentWillUnmount() {
//     // походу чтобы снять оброботчик надо именно функцию прописать а не event
//     // чтобы обработчик пониал что снимать
//     // но в функции должен быть объект event
//     // как проверить открепил я его или нет?
//     document.removeEventListener('contextmenu', this.showClock.bind(this));
//     document.removeEventListener('contextmenu', this.hideClock);
//   }

//   // если сделать стрелкой то все работает
//   // можно ли без доп функций а просто как то снять обработчик событий
//   // События, происходящие из-за взаимодействия пользователя с указывающим устройством (например, с мышью).
//   // Общие события, использующие этот интерфейс, включают щелчок, dblclick, mouseup, mousedown.
//   // это документация тайпскрипта в разделе Interface MouseEvent
//   hideClock = (event: MouseEvent) => {
//     event.preventDefault();
//     this.setState({ hasClock: false });
//     console.log('right btn');
//   };

//   // что то надо с bind сделать и привязать контекст вызова
//   // стрелка указівает контекст на родителя то есть класс ап
//   // но какой контекст у НЕстрелочной функции?
//   // this - указывает на текущую функцию, а не на класс в котором она вызвана
//   // Нужно использовать стрелочную функцию, она не имеет своего контекста:
//   showClock() {
//     // работает логи но состояние не меняется
//     // если не сделать байнд то идет отсылка на документ в котором дом дерево
//     console.log('left btn', this);
//     // ретерн тут тоже ничего не меняет
//     // The callback is made in a different context.
//     // You need to bind to this in order to have access inside the callback
//     this.setState({ hasClock: true });
//     // this.setState.bind(this.componentWillUnmount())({ hasClock: true });
//     // this.setState.bind(this.App)({ hasClock: true });
//   }
//   // .bind(this.componentDidMount())

//   // this code stops the timer
//   // window.clearInterval(timerId);

//   render() {
//     return (
//       <div className="App">
//         <h1>React clock</h1>
//         {this.state.hasClock && <Clock clockName={this.state.clockName} />}
//       </div>
//     );
//   }
// }
