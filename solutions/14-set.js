// BEGIN
const countUniqChars = (str) => {
    let uniq = [];
    for (let i = 0; i < str.length; i++){
        if (!uniq.includes(str[i])){
            uniq.push(str[i]);
        }
    }
    return uniq.length;
}
export default countUniqChars;
// END