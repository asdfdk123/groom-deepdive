const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1);

console.log(mySet); 

const rawTags = ['html', 'css', 'javascript', 'css', 'html'];
const uniqueTags = [...new Set(rawTags)];

console.log(uniqueTags);

const arr = [1, 2, 2, 3, 3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);