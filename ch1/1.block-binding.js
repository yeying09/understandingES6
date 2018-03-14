// 声明
// [创建]
// 初始化
// 变量提升 hoisting

function getValue(condition) {
	if(condition) {
		var value = "blue";
		let valuee = "pink";

		console.log(value); // blue
		console.log(valuee); // pink	

		// return value;
	} else {
		console.log(value); // undefined
		console.log(valuee); // valuee is not defined

		// return null;
	}

	console.log(value); // if -> blue; 		else -> undefined
	console.log(valuee); // if -> valuee is nof defined
}

getValue(false);