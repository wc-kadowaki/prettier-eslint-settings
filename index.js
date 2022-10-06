/**
 * @prettier
 */
const testFunction = () => {
  console.log('test');
};
testFunction();

const array = [
  'text text text text text text text text text text text text text text text text text',
  'text text text text text text text text text text text text text text text text text',
];
console.log(array);

const arrowParens = ['a', 'b', 'c', 'd', 'e', 'fj'];
const mapItem = arrowParens.map((item) => {
  item.length == 1;
});
console.log(mapItem);
