// BEGIN (write your solution here)
const getWeekends = (a = 'long') => {
    if (a === 'long'){
        return ['saturday', 'sunday'];
    }
    else {
        return ['sat', 'sun'];
    }
}
export {getWeekends}
// END
