# React Clock
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://AndriiRut.github.io/react_clock/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

## Task
Create a `Clock` component updating the time every second.
- Use class component
- Start the timer only when the component is added to the page (`componentDidMount`)
- Update the `state` every second using `setInterval`
- Save timerId to stop it later
    ```js
    this.timerId = setInterval(your code here);
    ```

![demo](./screenshot.png)

## Lifecycle methods tasks
1. Watch this video about [HOW TO HANDLE BUTTON CLICK](https://youtu.be/87RkHpYMDXI).
1. Add buttons `Show Clock` and `Hide Clock` in the `App` component to change `isClockVisible` variable in the `App` state.
1. The `Clock` should not be rendered when `isClockVisible` is `false`.
1. You have to add `data-cy="time"` attribute to the element, which show time on the page
1. Change the `Clock` component to print the time not only on the page but also in the `DevTools` console.
    - Stop the timer when the `Clock` is hidden (`componentWillUnmount`)
        ```js
        // use previously saved timerId
        clearInterval(this.timerId);
        ```
1. Check if it works correctly:
    - Hide and show the `Clock` several times and leave it visible
    - The time in the console should be printed only once each second

## (Optional) Prop update task
1. Add `Set random name` button to the `App` to set a random number as a `clockName` variable in the `App` state.
1. Pass the name to the `<Clock name={this.state.clockName} />`
1. Every time the `name` changes print a message in the console `The Clock was renamed from oldName to newName` (`componentDidUpdate`)
    - Check if the message appears in the console between clock ticks
