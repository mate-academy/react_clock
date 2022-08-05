# React Clock

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

Create a `Clock` class component that will update the time every second using a given markup:

1. Time should be printed on the page and in the DevTools console.
1. Start the timer only when the component is added to the page (`componentDidMount`).
1. Update time every second using the `window.setInterval`.
1. Change the `App` to be a class component.
1. Add a `hasClock` variable to the `App` state.
1. The `Clock` should be visible only when the `hasClock` is `true`.
1. Hide the `Clock` on a right mouse click in the `document` (`contextmenu` event):

    ```js
    document.addEventListener('contextmenu', () => {});
    ```

1. Show the `Clock` on a left mouse click in the `document` (`click` event):

    ```js
    document.addEventListener('click', () => {});
    ```

1. Check if the timer stops in the console when it is hidden (`componentWillUnmount`).
1. Add a `clockName` to the `App` state using the `getRandomName` function (already implemented).
1. Pass it to the `Clock` to be shown near the time (see the markup):

    ```jsx
    <Clock name={this.state.clockName} />
    ```

1. Update the `clockName` every `3300ms` with a new random name (use `window.setInterval`).
1. Each time the `name` changes, the `Clock` must print a message with an old name and a new name to the console (use `componentDidUpdate`):

    ```
    Renamed from <oldName> to <newName>
    ```

1. Check in the console that a renaming message occurs after each 3-4 time messages.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheatsheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://tania-troshchuk.github.io/react_clock/) and add it to the PR description.
