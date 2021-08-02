let result = [];
const insertItem = (item) => {
  result.push(item);
};
const deleteItem = (item) => {
  b = item - 1;
  result.splice(b, 1);
};
const lookupItem = (index) => {
  if (result.hasOwnProperty(index)) {
    a = result[index];
    result.splice(index, 1);
    return a;
  }
  return "null";
};
const printItems = () => {
  return result.join(",");
};
insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// // expected: 2
console.log(printItems());
// // expected: '1, 3, 2, 1'
deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'
deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
