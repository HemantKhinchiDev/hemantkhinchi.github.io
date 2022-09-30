console.log('local storage');

//storage data in local storage
// localStorage.setItem('name','mario');
// localStorage.setItem('age',56);

//get data from local storage
// let info = localStorage.getItem('name');
// let infoAge = localStorage.getItem('age');
// console.log(info, infoAge);

//updating data
// localStorage.setItem('name','Hemant')
// info = localStorage.getItem('name');
//console.log(info, infoAge);

//delete singal item
//localStorage.removeItem('name');

//delete all item
// localStorage.clear();
// info = localStorage.getItem('name')
// infoAge = localStorage.getItem('age')
// console.log(info, infoAge)

//complex data store array/object

const todos = [
    {text:'Play mariokart', another: 'shaun'},
    {text:'Buy some milk', another: 'mario'},
    {text:'Buy some bread', another: 'luigi'},
];
//console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));
const storage = localStorage.getItem('todos');
console.log(JSON.parse(storage));