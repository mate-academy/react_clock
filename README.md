# React Clock
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://<your_account>.github.io/react_clock/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
Create a Clock component updating the time every second.
- use class component
- start the timer only when the component is added to the page

![demo](./screenshot.png)

> Watch [this video](https://youtu.be/87RkHpYMDXI) to solve the next tasks

## Lifecycle methods tasks
1. Add buttons `Show Clock` and `Hide Clock` in the App changing `isClockVisible` value (`true/false`).
1. The `Clock` should not be rendered when `isClockVisible` is `false`
1. Change the `Clock` component to print the time not only on the page but also in the `DevTools` console.
1. Check if it works correctly:
    - Hide and show the `Clock` several times and leave it visible
    - The time in the console should be printed only once each second

## Prop update task
1. Add a button to the `App` setting a random number to a `clockName` variable.
1. Add a prop `name` to the `<Clock name={this.state.clockName />`
1. Every time the `name` changes print a message in the console `The Clock was renamed from oldName to newName`.
1. The time should still be printed in the console every second
