// BEGIN
const get = (array, id, def = null) => {
    if (id < array.length && id >= 0){
        return array[id];
    }
    else {
        return def;
    }
}
export {get}
// END