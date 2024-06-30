1. [CODE KNOWLEDGE] - Check if you remove your event listener, when component will unmount from page.

BAD EXAMPLE:
```jsx
componentDidMount() {
  document.addEventListener('click', this.handleLeftClick);
}
```

GOOD EXAMPLE:
```jsx
componentDidMount() {
  document.addEventListener('click', this.handleLeftClick);
}

componentWillUnmount() {
  document.removeEventListener('click', this.handleLeftClick);
}
```

2. [TASK DESCRIPTION] - Methods that handle clicks should change **only** visibility of the clock.
3. [CODE STYLE] - Method's name should start with a verb (so you could easily tell what your method actually do)

BAD EXAMPLE:
```jsx
clickHandler = () => {
 console.log('Hello, world');
}
```

GOOD EXAMPLE:
```jsx
handleClick = () => {
 console.log('Hello, world');
}
```

4. [CODE KNOWLEDGE] - Avoid creating new timer before cleaning previous one. Maybe, you need **only** one timer.

BAD EXAMPLE: (you will create new timer on each click and can't clear previous one)
```jsx
handleClick = () => {
  this.id = window.setTimeout(() => {}, 0)
}
```

GOOD EXAMPLE: (you will create **one** timer on mount and remove it on unmount.) 
```jsx
componentDidMount() {
  this.id = window.setTimeout(() => {}, 0)
}

componentWillUnmount() {
  window.clearTimeout(this.id);
}
```
