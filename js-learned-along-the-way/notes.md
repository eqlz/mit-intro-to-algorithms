*The purpose of writing notes, is to makes notes unnecessary. In the process of orginazing notes, I have understood the material.*

# Symbol
*[source]* (https://javascript.info/symbol)
- symbol value is unique
- create symbol via ```Symbol()```
- we can give symbol a descprition ```Symbol('description')```, e.g. ```let id = Symbol("id");```
- symbols are guarenteed to be unique, even though they can have the same descriptions

## Usage of Symbol
### hidden properties
- create "hidden" properties of an object, no other part of code can occasionally access or overwrite, e.g.
```
let user = { name: "Emily" };
let id = Symbol("id");

user[id] = "ID value for Emily";
console.log( user[id] );
```
- Symbols are skipped by for…in, e.g.
```
let id = Symbol('id');
let user = {
  name: 'John',
  age: 30,
  [id]: 0001
}

for (let key in user) {
  console.log(key);
}

// name
// age
```
# Iterable
- There are built-in iterables, liket array, map, set, but not object.
- What if I want to make object iterable?
  - Then the object must implement a @@iterator method. That is, the object must have a property whose key is @@iterator, which is available by constant ```Symbol.Iterator```.
  - @@iterator method is called with no arguments, returns an object that is conforming to iterator protocol.
- Then what is an iterator?
  - an iterator is an object when it implements method ```next()```
  - ```next()``` method returns an object that has at least the following [two properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol):
    -  ```done``` (boolean)
    -  ```value```

- Notice that, a generator object that is returned by a generator function conforms to both iterable protocol and iterator protocol. It comes handy when making an object iterable. [Example](https://github.com/eqlz/mit-intro-to-algorithms/blob/master/singlyLinkedList.js).


# Generator function
*[source]* (https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)
- a function that can stop midway and then continue from where it stopped
- a function that produces a sequence of results instead of a single value, i.e. you generate a series of values
- a generator function will return an object upon the call ```next()```. Every invocation of ```next()``` will return an object in the form of:
  - ```
    {
      value: any,
      done: true or false
    }
    ``` 
  - ```value``` property will contain value
  - ```done``` property is either ```true``` or ```false```. When it's ```true```, the generator functions stops and won't generate any more values.  

- an illustration of how generator function works:
![Image of functions vs generators](https://github.com/eqlz/mit-intro-to-algorithms/blob/master/js-learned-along-the-way/normal-functions-vs-generators.png)
  - start a generator function by calling ```next()``` or using in loops/functions

## Create generator function
- syntax ```function *``` 

- keyword ```yield```: an operator with which a generator can pause itself. 
- Every time a generator encounters a ```yield```, it "returns" the value specified after it.
- we don't say "returned" in the context of generator, we say "yielded".

- invoke generator function in the following example ```const generatorObject = generatorFunction();```.
- a generator function always returns a [generator object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
  - a generator object is an iterator
  - can call ```next()``` method on generator object

- when ```done``` is set to ```true```, it signals the end of a generator. It can't generate more values or resume again, because there is no more statements to execute.
- to run the generator again, we have make a new generator object.
```
function *generatorFunction() {
  console.log('This will be execusted first.');
  yield 'Hello, ';
  console.log('This will be execusted after Hello');
  yield 'World!'
}

const generatorObject = generatorFunction(); // invoke generator function

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
```