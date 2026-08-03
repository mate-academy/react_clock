1. [CODE KNOWLEDGE] - Make sure that you add some rendering optimization techniques (`React.memo` and so on.)
2. [CODE KNOWLEDGE] - When you rendering a list, don't forget to add `key` prop

BAD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat cat={cat} />)}
</div>
```

GOOD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat key={cat.id} cat={cat} />)}
</div>
```
3. [API] - When you make a request to the server, don't forget to handle possible errors
