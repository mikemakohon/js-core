// ? Objects
// assign
// const source = { b: 4, c: 5 };
// const target = { a: 1, b: 2 };
// const returnedTarget = Object.assign(target, source);
// console.log(target, returnedTarget); // { a: 1, b: 4, c: 5 } { a: 1, b: 4, c: 5 }

// create
// const person = {
//   isHuman: true,
//   gender: "male",
// };
// const result = Object.create(person);
// console.log(result.isHuman, result.gender); // true male

// defineProperties
// const object1 = {};
// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {},
// });
// console.log(object1.property1); // 42

// defineProperty
// const object1 = {};
// Object.defineProperty(object1, "property1", {
//   value: 42,
//   writable: false,
// });
// object1.property1 = 77;
// console.log(object1.property1); // 42

// entries
// const object1 = {
//   a: "somestring",
//   b: 42,
// };
// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
// "a: somestring" "b: 42"

// freeze
// const obj = {
//   prop: 42,
// };
// Object.freeze(obj);
// obj.prop = 33;
// console.log(obj.prop);

// fromEntries
// const entries = new Map([
//   ["foo", "bar"],
//   ["baz", 42],
// ]);
// const obj = Object.fromEntries(entries);
// console.log(obj);

// getOwnPropertyDescriptor
// const object1 = {
//   property1: 42,
// };
// const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");
// console.log(descriptor1.configurable); // true
// console.log(descriptor1.value); // 42

// getOwnPropertyDescriptors
// const object1 = {
//   property1: 42,
// };
// const descriptors1 = Object.getOwnPropertyDescriptors(object1);
// console.log(descriptors1.property1.writable); // true
// console.log(descriptors1.property1.value); // 42

// getOwnPropertyNames
// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.getOwnPropertyNames(object)); // [ 'a', 'b', 'c' ]

// getOwnPropertySymbols
// const object1 = {};
// const a = Symbol("a");
// const b = Symbol.for("b");
// object1[a] = "localSymbol";
// object1[b] = "globalSymbol";
// const objectSymbols = Object.getOwnPropertySymbols(object1);
// console.log(objectSymbols, objectSymbols.length); // [ Symbol(a), Symbol(b) ] 2

// getPrototypeOf
// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1); // true

// hasOwn, hasOwnProperty
// const object1 = {
//   prop: "exists",
// };
// console.log(Object.hasOwn(object1, "prop")); // true
// console.log(Object.hasOwn(object1, "toString")); // false
// console.log(object1.hasOwnProperty("prop")); // true
// console.log(object1.hasOwnProperty("toString")); // false

// is
// console.log(Object.is("foo", "foo")); // true
// console.log(Object.is("foo", "bar")); // false
// const foo = { a: 1 };
// const bar = { a: 1 };
// console.log(Object.is(foo, foo)); // true
// console.log(Object.is(foo, bar)); // false

// isExtensible, preventExtensions
// const object1 = {};
// console.log(Object.isExtensible(object1)); // true
// Object.preventExtensions(object1);
// console.log(Object.isExtensible(object1)); // false

// isFrozen
// const object1 = {
//   property1: 42,
// };
// console.log(Object.isFrozen(object1)); // false
// Object.freeze(object1);
// console.log(Object.isFrozen(object1)); // true

// isPrototypeOf
// function Foo() {}
// function Bar() {}
// Bar.prototype = Object.create(Foo.prototype);
// const bar = new Bar();
// console.log(Foo.prototype.isPrototypeOf(bar)); // true
// console.log(Bar.prototype.isPrototypeOf(bar)); // true

// seal, isSealed
// const object1 = {
//   property1: 42,
// };
// console.log(Object.isSealed(object1)); // false
// Object.seal(object1);
// console.log(Object.isSealed(object1)); // true

// keys, values
// const object = {
//   a: 1,
//   b: 2,
//   c: "smth else",
// };
// console.log(Object.keys(object)); // [ 'a', 'b', 'c' ]
// console.log(Object.values(object)); // [ 1, 2, 'smth else' ]

// isEnumerable
// const object1 = {};
// const array4 = [];
// object1.property1 = 42;
// array4[0] = 42;
// console.log(object1.propertyIsEnumerable("property1")); // true
// console.log(array4.propertyIsEnumerable(0)); // true
// console.log(array4.propertyIsEnumerable("length")); // false

// valueOf
// function MyNumberType(n) {
//   this.number = n;
// }
// MyNumberType.prototype.valueOf = function () {
//   return this.number;
// };
// const object1 = new MyNumberType(4);
// console.log(object1 + 3); // 7
