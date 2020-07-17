import { Component, Prop, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';

// class-style写vue组件
// 基于class的导出
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string; //!:非空断言
  features: string[] = ['test1', 'test2'];

  onClick(){
    console.log(this) // 不用像react jsx一样写bind
  }

  render(h: CreateElement){
    return <div onClick={this.onClick}>这是tsx写法的组件：{this.msg}</div>
  }
}