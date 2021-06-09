let obj = {
	name: 'Karol',
  lastName: 'Topchiev'
}

let arr = [];

arr.push(obj);

let parsed = JSON.parse(arr);

console.log(parsed);