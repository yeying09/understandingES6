var count = 30;

// 1. let count = 40; // 抛出语法错误
// 2.var // 不抛出错误
var count = 40;

if(true) {

    // 不同作用域，不会抛出错误
    let count = 40;
}
