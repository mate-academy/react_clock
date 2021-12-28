# React Clock

 [DEMO LINK](https://lanebx.github.io/react_clock/)


## Lifecycle methods tasks
1. Add buttons `Show Clock` and `Hide Clock` in the `App` component to change `isClockVisible` variable in the `App` state.

1. Check if it works correctly:
    - Hide and show the `Clock` several times and leave it visible
    - The time in the console should be printed only once each second

1. Add `Set random name` button to the `App` to set a random number as a `clockName` variable in the `App` state.

1. Every time the `name` changes print a message in the console `The Clock was renamed from oldName to newName` (`componentDidUpdate`)
    - Check if the message appears in the console between clock ticks
