// ? Arrays
const array1 = [1, 0, 25, 17, 39, 131];
const array2 = [22, 1, 23, 67];

// at
// console.log(`${array1.at(2)}`);
// console.log(`${array1.at(-1)}`);
// 25, 131

// concat
// const mergedArr = array1.concat(array2);
// console.log(mergedArr);
// [ 1,  0, 25, 17, 39, 131, 22,  1, 23, 67 ]

// copyWithin
// console.log(array1.copyWithin(1, 3));
// [ 1, 17, 39, 131, 39, 131 ]

// entries
// const iterator = array1.entries();
// console.log(iterator.next().value); // [ 0, 1]
// console.log(iterator.next().value); // [ 1, 0]

// every
// const res = array1.every((element) => element > 0);
// console.log(res);
// false

// fill
// console.log(array1.fill(0, 1, 5));
// [ 1, 0, 0, 0, 0, 131 ]

// filter
// const filteredArr = array1.filter((element) => element > 10);
// console.log(filteredArr);
// [ 25, 17, 39, 131 ]

// find
// const found1 = array1.find((element) => element > 25);
// const found2 = array1.find((element) => element < 0);
// console.log(found1); // 39
// console.log(found2); // undefined

// findIndex
// const found1 = array1.findIndex((element) => element > 25);
// const found2 = array1.findIndex((element) => element < 0);
// console.log(found1); // 4
// console.log(found2); // -1

// flat
// const array3 = [0, 5, [24, 31], [[[20, -1, 35]]]];
// console.log(array3.flat()); // [ 0, 5, 24, 31, [ [ 20, -1, 35 ] ] ]
// console.log(array3.flat(3)); // [ 0,  5, 24, 31, 20, -1, 35 ]

// flatMap
// const array3 = [[0], [1], [2], [3]];
// console.log(array3.flatMap((element) => element * 2)); // [ 0, 2, 4, 6 ]

// forEach
// array1.forEach((element) => console.log(element)); 1 0 25 17 39 131

// arrayFrom
// console.log(Array.from("hello")); [ 'h', 'e', 'l', 'l', 'o' ]
// console.log(Array.from([1, 2, 3], (element) => element * 2)); [ 2, 4, 6 ]

// groupBy
// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];
// const result = inventory.groupBy(({ type }) => type);
// console.log(result);

// groupByToMap
// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 9 },
//   { name: "bananas", type: "fruit", quantity: 5 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 12 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];
// const restock = { restock: true };
// const sufficient = { restock: false };
// const result = inventory.groupByToMap(({ quantity }) =>
//   quantity < 6 ? restock : sufficient
// );
// console.log(result.get(restock));

// includes
// console.log(array1.includes(1)); // true
// console.log(array1.includes(100)); // false

// indexOf
// console.log(array1.indexOf(25)); // 2
// console.log(array1.indexOf(25, 3)); -1
// console.log(array1.indexOf(55)); // -1

// isArray
// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray("Hello")); // false

// join
// console.log(array1.join("_")); // "1_0_25_17_39_131"

// keys()
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }
// 0 1 2 3 4 5

// lastIndexOf
// const repeatedArr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
// console.log(repeatedArr.lastIndexOf(2)); // 7

// map
// const result = array1.map((element) => element * 2);
// console.log(result); // [ 2, 0, 50, 34, 78, 262 ]

// of
// const exampleArr = Array.of(1, 2, 3, "Hello"); [ 1, 2, 3, 'Hello' ]
// console.log(exampleArr);

// pop
// console.log(array1.pop(), array1); // 131 [ 1, 0, 25, 17, 39 ]

// push
// console.log(array1.push("smth"), array1); 7 [ 1, 0, 25, 17, 39, 131,'smth']

// reduce
// const sum = array1.reduce(
//   (accumulator, currentElement) => accumulator + currentElement,
//   0
// );
// console.log(sum); // 213

// reduceRight
// const exampleArray = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const result = exampleArray.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue)
// );

// console.log(result); // [ 4, 5, 2, 3, 0, 1 ]

// reverse
// console.log(array1.reverse()); // [ 131, 39, 17, 25, 0, 1 ]

// shift
// console.log(array1.shift(), array1); // 1 [ 0, 25, 17, 39, 131 ]

// slice
// console.log(array1.slice(2, 4), array1);

// some
// console.log(array1.some((element) => element > 100)); // true

// sort
// console.log(array1.sort()); // [ 0, 1, 131, 17, 25, 39 ]
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
// console.log(array1.sort((a, b) => b - a)); // [ 131, 39, 25, 17, 1, 0 ]

// splice
// splice(start, deleteCount, item1, item2, itemN)
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

// months.splice(4, 1, "May");
// console.log(months); // [ 'Jan', 'March', 'April', 'June', 'May' ]

// toLocaleString
// console.log(array1.toLocaleString());
// const exampleArray = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
// const localeString = exampleArray.toLocaleString("en", { timeZone: "UTC" });
// console.log(localeString); // 1,a,12/21/1997, 2:12:00 PM

// toString
// console.log(array1.toString()); // 1,0,25,17,39,131

// unshift
// console.log(array1.unshift(23), array1); // 7 [ 23, 1, 0, 25, 17, 39, 131 ]

// values
// const arrayExample = ["a", "b", "c"];
// const iterator = arrayExample.values();

// for (const value of iterator) {
//   console.log(value);
// }
// a b c
