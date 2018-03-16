var condition = true
console.log(typeof value); // undefined.
if(condition) {
	console.log(typeof value); // ReferenceError: value is not defined
	// ========================
	// temporal dead zone (TDZ)
	// ========================
	let value = "blue";
}