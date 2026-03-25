const _ = require("lodash"); 

// BEGIN
import {uniq} from '../node_modules/lodash';
const getSameCount = (arr1, arr2) => {
    arr1 = uniq(arr1);
    arr2 = uniq(arr2);
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        const a = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
        if (a === arr2[j]) {
            count++;
            break;
        }
        }
    }
    return count;
}
export default getSameCount;
// END