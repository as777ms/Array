
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  // Find the index of the first John
console.log((users.findIndex(user => user.name == 'John'))); // 0
  
  // Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3