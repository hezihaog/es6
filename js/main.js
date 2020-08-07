// 导入hello.js中的util对象
import util from "./hello.js"
//导入user.js的变量和方法
import {name, age, add} from "./user.js"

//使用util对象的sum()方法
util.sum(1, 2);
//使用name变量和add方法
console.log(name);
add(1, 3);