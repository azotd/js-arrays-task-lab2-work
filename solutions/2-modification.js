const swap = (array) => {
  if (array.length < 2) {
    return array;
  }

  const a = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = a;

  return array;
};

export { swap };
// END