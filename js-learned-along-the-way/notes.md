# Symbol
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

# Generator function
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