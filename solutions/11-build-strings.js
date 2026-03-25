// BEGIN
const buildDefinitionList = (arr) => {
    if (arr.length === 0){
        return '';
    }
    let res = '';
    for (let i = 0; i < arr.length; i++){
        res = res + '<dt>' + arr[i][0] + '</dt>' + '<dd>' + arr[i][1] + '</dd>';
    }
    res = '<dl>' + res + '</dl>';
    return res;
}
export default buildDefinitionList;
// END