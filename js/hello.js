//直接在声明处，使用export进行导出，提供方这里直接写util，依赖方就只能写util了，所以还有下面一种方式
// export const util = {
//     sum(a, b) {
//         return a + b;
//     }
// }

//导出时，不起名字，依赖方导入时，再起名字
export default {
    sum(a, b) {
        return a + b;
    }
}

//export不仅可以导出对象，一切JS变量都可以导出，比如：基本类型变量、函数、数组、对象
//export {util}