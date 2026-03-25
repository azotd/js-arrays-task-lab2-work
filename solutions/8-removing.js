import { get } from "lodash";

// BEGIN
const getSameParity = (arr) => {
    let fl = false;
    if (arr[0] % 2 === 0){
        fl = true;
    }
    let res = [];
    if (fl){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 === 0){
                res.push(arr[i]);
            }
        }
    }
    else {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 !== 0){
                res.push(arr[i]);
            }
        }
    }
    return res;
}
export default getSameParity;
// END