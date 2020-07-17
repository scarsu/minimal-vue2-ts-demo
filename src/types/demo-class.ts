class Parent {
  private _foo = 'foo' // 私有属性，不能在类的外部访问
  protected bar = 'bar' // 保护属性，可以在子类中访问

  // 参数属性：构造函数参数加修饰符，能够定义为成员属性
  constructor(public tua = 'tua') {}  // tua会变成Parent的一个属性，很方便

  // 方法也有修饰符
  private someMethod() {}

  // 存取器：属性方式访问，可添加额外逻辑，控制读写性
  // getter在class-style写法的vue组件中，可以作为计算属性
  get foo() {
    return this._foo
  }
  set foo(val) {
    this._foo = val
  }
}
