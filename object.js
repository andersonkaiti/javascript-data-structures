const obj = {
  name: "Heisenberg",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "football";
delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
// o bracket notation é útil quando a chave do objeto contém espaços ou hífens
console.log(obj["key-three"]);
console.log(obj);
console.log(obj.sayMyName());

// Object.keys, .values(), .entries()