// BEGIN
const makeCensored = (str, arr) => {
  const words = str.split(' ');
  const res = words.map(word => arr.includes(word) ? '$#%!' : word);
  return res.join(' ');
};

export default makeCensored;
// END