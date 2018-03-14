var count = 30;

// 1. let count = 40; // 抛出语法错误
// 2. var // 不抛出错误
var count = 40;

if(true) {

    // 不同作用域，不会抛出错误
    let count = 40;

    let count1 = 2;

    const maxItems = 5;

    // const name; // Missing initializer in const declaration

    console.log(maxItems);
} else {
	console.log(maxItems);
}

console.log(count1); // count1 is not defined
console.log(maxItems); // maxItems is not defined



var	message	=	"Hello!";
let	age	=	25;
//	二者均会抛出错误
const	message	=	"Goodbye!"; // has already been declared
const	age	=	30; // has already been declared


// const 声明会阻止对于变量绑定与变量自身值的修改
// 变量绑定？- 引用、指针