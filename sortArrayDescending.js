let array = [23, 56, 2, 100, 34, 54, 85, 45, 14, 95];
function sortArrayDescending(arr) {
 return arr.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
 });
}
console.log(sortArrayDescending(array));