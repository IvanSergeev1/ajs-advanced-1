export default function orderByProps(obj, props) {
  if (!obj || !props) {
    throw Error('Недостаточно данных для сортировки');
  }

  const array = [];
  const arrayTwo = [];

  props.forEach((el) => {
    for (const prop in obj) {
      if (el === prop) {
        array.push({ key: prop, value: obj[prop] });
        // eslint-disable-next-line no-param-reassign
        delete obj[prop];
      }
    }
  });

  // eslint-disable-next-line guard-for-in
  for (const prop in obj) {
    arrayTwo.push({ key: prop, value: obj[prop] });
  }

  return [...array, ...arrayTwo.sort((a, b) => (a.key > b.key ? 1 : -1))];
}
