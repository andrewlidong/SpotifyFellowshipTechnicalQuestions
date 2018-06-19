// Question 1 -- sortByStrings(s,t):
// Sort the letters in the string s by the order they occur in the string t.
// You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw",
// the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg",
// the output should be sortByString(s, t) = "oodg".


const sortByStrings = (s, t) => {
  const findOrder = (str) => {
    const result = {};

    for(let i = 0; i < str.length; i++){
      result[str[i]] = i;
    }

    return result
  }

  const comparator = (x, y) => {
    if(order[x] < order[y]){ return -1 }
    if(order[x] === order[y]){ return 0 }
    return 1;
  }

  const quickSort = (s, comparator) => {
    if(s.length === 0){
      return s;
    }

    const pivot = s[0];
    let leftSide = '';
    let rightSide = '';

    for(let i = 1; i < s.length; i++){
      let letter = s[i];
      if(comparator(letter, pivot) === -1){
        leftSide += letter;
      } else{
        rightSide += letter;
      }
    }

    return quickSort(leftSide, comparator) + pivot + quickSort(rightSide, comparator);
  }

  const order = findOrder(t);
  return quickSort(s, comparator);
}
