"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CharactersCollection } from './CharactersCollection';
// import { NumbersCollection } from './NumbersCollection';
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection(
// 'testingsortingalgorithm'
// );
// charactersCollection.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();
console.log('------------------ after sort ---------------------');
linkedList.sort();
linkedList.print();
