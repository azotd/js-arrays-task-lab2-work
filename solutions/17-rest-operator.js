// BEGIN
const getMax = (arr) => {
    if (arr.length === 0){
        return null;
    }
    let max = arr[0];
    for (let num of arr){
        if (num > max){
            max = num;
        }
    }
    return max;
}
export {getMax};
// END