const array = ["a", "b", "c", "d", "e", "fg"];
const array2 = array.map(text => text.length < 2);
console.log(array2);

import { text } from "./exportModule";
console.log(text);