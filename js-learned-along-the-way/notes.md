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
console.log( user[id] ); // we can access the data using the symbol as the key
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


