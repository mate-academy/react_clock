# React Clock

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

Create a `Clock` class component that will update the time every second using a given markup:

> Here is [the working version](https://mate-academy.github.io/react_clock)

- print current time on the page on page load;
- update the time every second using the `window.setInterval`;
- start the timer only when the component is added to the page (`componentDidMount`).- every second print the time in the DevTools using `console.info` method (**not** the `console.log`);
- make the `App` a class component;
- add the `hasClock` property to the `App` state;
- the `Clock` should be visible only when the `hasClock` is `true`;
- hide the `Clock` on a right mouse click in the `document` (`contextmenu` event):

- друкувати поточний час на сторінці під час завантаження сторінки;
- оновлювати час кожну секунду за допомогою `window.setInterval`;
- запускати таймер лише тоді, коли компонент додано на сторінку (`componentDidMount`).- кожну секунду друкувати час у DevTools за допомогою методу `console.info` (**не** `console.log`);
- зробити `App` компонентом класу;
- додати властивість `hasClock` до стану `App`;
- `Clock` має бути видимим лише тоді, коли `hasClock` має значення `true`;
- приховати `Годинник` при клацанні правою кнопкою миші в `документі` (подія `contextmenu`):
    ```js
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu

      // put your code here
    });
    ```
- show the `Clock` on a left mouse click in the `document` (`click` event):
- показувати `Годинник` при клацанні лівою кнопкою миші в `документі` (подія `click`):
    ```js
    document.addEventListener('click', () => {});
    ```
- the time should not be printed to the console when the Clock is hidden (`componentWillUnmount`);
- add the `clockName` having `Clock-0` default value to the `App` state;
- pass it to the `Clock` to be shown near the time (see the markup):

- час не повинен виводитися на консоль, коли годинник приховано (`componentWillUnmount`);
- додати `clockName` зі значенням за замовчуванням `Clock-0` до стану `App`;
- передати його до `Годинника`, щоб відображати його біля часу (див. розмітку):
    ```jsx
    <Clock name={this.state.clockName} />
    ```
- update the `clockName` every `3300ms` with a new value generated by existing `getRandomName` function;
- each time the name is changed, the `Clock` must print a message with an old name and a new name using the `console.debug` method (use `componentDidUpdate`):

- оновлювати `clockName` кожні `3300 мс` новим значенням, згенерованим існуючою функцією `getRandomName`;
- кожного разу, коли ім'я змінюється, `Годинник` має друкувати повідомлення зі старим ім'ям і новим ім'ям за допомогою методу `console.debug` (використовуйте `componentDidUpdate`):
    ```
    Renamed from oldName to newName
    ```
- to see `console.debug` messages enable the `verbose` level in DevTools console:
- щоб побачити повідомлення `console.debug`, увімкніть рівень `verbose` в консолі DevTools:
    
![How to enable verbose level](./readme-files/enable-verbose-level.png)

> check in the console that a renaming message occurs after each 3-4 time messages.
> перевірте в консолі, чи з'являється повідомлення про перейменування після кожних 3-4 повідомлень.

![Expected console output](./readme-files/expected-console-output.png)

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheatsheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_clock/) and add it to the PR description.
