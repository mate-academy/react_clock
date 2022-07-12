# React Clock
Create a class component `Clock` updating the time every second using a given markup.
Time should be printed on the page and in the DevTools console.

1. start the timer only when the component is added to the page (`componentDidMount`)
1. update time every second using `setInterval`.
1. Change the `App` to be a class components
1. add `hasClock` variable to the `App` state.
1. the `Clock` should be visible only when `hasClock` is `true`.
1. hide the clock on right mouse click in the `document` (`contextmenu` event)
    ```js
    document.addEventListener('contextmenu', () => {});
    ```
1. show the clock on left mouse click in the `document` (`click` event)
    ```js
    document.addEventListener('click', () => {});
    ```
1. check if timer stops in the console when it is hidden (`componentWillUnmount`)
1. add `clockName` to the `App` state using `getRandomName` function (already implemented)
1. pass it to the `Clock` to be show near the time (see the markup)
    ```jsx
    <Clock name={this.state.clockName} />
    ```
1. update `clockName` every `3300ms` with a new random name (use `setInterval`)
1. every time the `name` changes the `Clock` must print a message with an old name and a new name to the console (`componentDidUpdate`)
    ```
    Renamed from <oldName> to <newName>
    ```
1. check in the console that a renaming message occurs after each 3-4 time messages

## Instructions
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://amelentieva.github.io/react_clock/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)
