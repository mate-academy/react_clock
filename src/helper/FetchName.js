const FetchName = async () => {
  const response = await fetch('https://mate.academy/students-api/goods',
    { cache: 'no-cache' });
  let name = '';

  await response.json().then(date => {
    name = date[Math.ceil(Math.random() * date.length)];
  });

  return name?.name ? name.name : 'Unknown Fruit';
};

export default FetchName;
