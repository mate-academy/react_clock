# React Clock
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://VladSavustianenko.github.io/react_clock/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
Create a Clock component updating the time every second.
- use class component
- start the timer only when the component is added to the page

![demo](./screenshot.png)

## Lifecicle methods tasks
1. Change the `Clock` component to print the time in the `DevTools` console
1. Add a button outside the `Clock` component
1. The button should toggle visibility of the `Clock` (`isClockVisible = true/false`)
1. Click the button several times and finish with the `Clock` visible
1. The time in the console should be printed only once each second.

## Prop update task
1. Add a prop `name` to the `Clock`
1. Every time the `name` changes print a message in the console `The Clock was renamed from oldName to newName`.
1. To check if it works add a button to the `App` that will set a random number as a name for the clock.
1. The time should still be printed in the console every second
