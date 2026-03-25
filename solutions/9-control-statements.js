// BEGIN
const getTotalAmount = (arr, am) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].slice(0, 3) === am){
            sum += Number(arr[i].slice(4, 7));
        }
    }
    return sum;
}
export default getTotalAmount;
// END