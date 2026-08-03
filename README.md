# React dynamic list of goods

> Here is [the working page](https://mate-academy.github.io/react_dynamic-list-of-goods/)

You have 3 button that should load [the goods](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) and show them on the page using the `GoodsList`.

1. `Load All goods` should load and show all the `goods`;
1. `Load 5 first goods` should do the next:
    - load all the goods;
    - sort them by name;
    - and show the first 5;
1. `Load red goods` should load all the goods show only `red` ones;
1. Server has only 1 endpoint returning all the goods, so you should do all the preparations in corresponding methods in `/api/goods`.
1. `GoodsList` is almost finished, you just need to use corresponding colors for `li`s;

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_dynamic-list-of-goods/) and add it to the PR description.
