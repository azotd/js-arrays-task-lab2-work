// BEGIN
const addPrefix = (arr, pr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(pr + ' ' + arr[i]);
    }
    return res;
}
export default addPrefix;
// END