const fetchName = async () => {
  const response = await fetch('https://mate.academy/students-api/goods',
    { cache: 'no-cache' });
  let foods = '';

  await response.json().then(date => {
    foods = date[Math.ceil(Math.random() * date.length)];
  });

  return foods?.name || 'Unknown Fruit';
};

export default fetchName;
