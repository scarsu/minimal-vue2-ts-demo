// 类型注解
let foo: string = '';
foo = '1';
// foo = 1;  // 错误：不能将类型“1”分配给类型“string”。


// 类型推断
let foo2 = true;
// foo2 = 1; //  错误：不能将类型“1”分配给类型“boolean”。


// 类型注解可以写的8种基本数据类型：
// 7种原始类型：string, number, bigint, boolean, undefined, null, symbol
// 1种复杂类型：object
// let foo3: number;
// let foo4: Number;  // interface Number
// let foo5: date;  // 错误：找不到名称“date”。
// let foo6: Date;  // interface Date
// js内置对象，作为interface注解

// 类型数组
// let arr: string[]
// arr = ['Tom']
// arr = [1, 'Tom']  // 错误：不能将类型“number”分配给类型“string”。
// arr.push(1) // 错误：类型“1”的参数不能赋给类型“string”的参数。

// 任意类型any
let bar: any
bar = '1'
bar = 1

// any数组
let arrAny: any[]
arrAny = [1, '2', true]

// 函数参数必须写类型注解
// function Foo(person) { // 错误：参数“person”隐式具有“any”类型。
//   console.log('hello,' + person)
// }

// 函数参数 类型约束
function greet(person: string) {
  console.log('hello,' + person)
}
greet('Tom')
// greet(1)  // 错误：类型“1”的参数不能赋给类型“string”的参数。

// 函数返回值 类型约束
function greet2(person: string): string {
  return 'hello,' + person
}
let num: number;
// num = greet2('Tom') // 错误：不能将类型“string”分配给类型“number”。

// void类型
// 明确的声明 当前函数没有返回值
function warn(): void { }

// 类型别名：定义自定义类型的复用
type MyType = { foo: string, bar: number }

let myTypeObj: MyType
// myTypeObj = {
//   foo: 1,  // 不能将类型“string”分配给类型“number”。
//   bar: '1' // 错误：不能将类型“string”分配给类型“number”。
// }

// interface
interface MyInterFaceType { foo: string, bar: number }
let myIfTypeObj: MyInterFaceType
// myIfTypeObj = {
//   foo: 1,  // 不能将类型“string”分配给类型“number”。
//   bar: '1' // 错误：不能将类型“string”分配给类型“number”。
// }


// 联合类型
let foo9: string | number
foo9 = '1'
foo9 = 1
// foo9 = true // 不能将类型“true”分配给类型“string | number”。

// 交叉类型
type First = { first: number }
type Second = { first: string, second: string }
let foo10: First & Second
// foo10 = {
//   first: 1,  // 错误：不能将类型“string”分配给类型“never”。
//   second: '1'
// }
// 交叉类型中 相同属性的类型不能不同，否则会被判断为”never“类型

// 交叉类型的应用
type Person = {
  id: number,
  name: string
}
type Select = {
  selected: boolean
}
type SelectedPerson = Person & Select


// 函数约束
function greeting(msg: string) {
  return 'hello,' + msg
}
// greeting()  // 错误：应有 1 个参数，但获得 0 个。

function greeting2(msg?: string) {
  return 'hello,' + msg
}
greeting2() // 正确

// 默认值
function greeting3(msg: string = '') { // 错误：参数不能包含问号和初始化表达式。
  return msg
}

// 重载声明1
function fn(a: string): void

// 重载声明2
function fn(a: string, b: number): void

// 真正函数实现
function fn(a: string, b?: number) {
  if (b) {
    // 执行重载2
  } else {
    // 执行重载1
  }
}

// fn()


// 泛型
interface Result {
  success: true | false,
  data: Person[]  // 此处限制了Result的data只能是Person类型
}

// 想要使Result更加通用:使用一个动态的类型T
interface Result2<T> {
  success: true | false,
  data: T[]
}
// 定义一个函数，用<>声明泛型T
function getResult<T>(data: T[]): Result2<T> {
  return { success: true, data}
}
// 调用函数时，用<>明确规定具体的类型
getResult<string>(['1'])