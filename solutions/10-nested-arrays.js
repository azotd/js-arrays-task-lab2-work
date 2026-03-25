// BEGIN
const getSuperSeriesWinner = (arr) => {
    let sums = 0;
    let sumc = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] === arr[i][1]){
            continue;
        }
        if (arr[i][0] > arr[i][1]){
            sumc += 1;
        }
        else {
            sums += 1;
        }
    }
    if (sumc === sums){
        return null;
    }
    if (sumc > sums){
        return 'canada';
    }
    else{
        return 'ussr';
    }
}
export default getSuperSeriesWinner;
// END