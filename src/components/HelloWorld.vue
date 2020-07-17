<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 新增特性 -->
    <div><input type="text" @keyup.enter="addFeature"></div>

    <!-- 特性列表 -->
    <ul>
      <li
        v-for="feature in features" 
        :key="feature.id" 
        :class="{select:feature.select}"
        @click="feature.select = !feature.select"
        >{{feature.name}}</li>
    </ul>

    <!-- getter 计算属性 -->
    <div>{{total}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import axios from 'axios'
// import {Feature} from '@/types/index'

type Feature={
  id:number,
  name:string
}
type Select={
  select:boolean
}
type FeatureSelect=Feature & Select

// class-style写vue组件
// 基于class的导出
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  // class的属性将成为data中的数据
  features: FeatureSelect[] = [];

  // created(){
  //   this.features = [
  //     {id:1,name:'test1',select:true},
  //     {id:2,name:'test2',select:false}
  //   ]
  // }

  get total(){
    return this.features.length
  }

  async mounted () {
    const resp = await this.$http.get<FeatureSelect[]>('/api/list')
    this.features = resp.data
  }

  // class中写的方法，与生命周期同名，则作为生命周期钩子函数
  // 其他的方法，等同于methods中写的方法
  addFeature(e:KeyboardEvent){  // 相对于Event接口，KeyboardEvent更加具体，更加强类型

    // 得益于声明了KeyBoardTarget接口,
    // 在获取target属性时,
    // 会显示target的类型提示：(property) Event.target: EventTarget | null

    // 类型断言：明确的限制类型
    const inp = e.target as HTMLInputElement
    const feature:FeatureSelect = {
      id:this.features.length + 1,
      name:inp.value,
      select:false
    }
    this.features.push(feature)
    inp.value = ''
  }
}

// option-style写vue组件
// import Vue from 'vue'
// export default Vue.extend({
//   data:1  // 错误：`data` property in component must be a function
// })
</script>

<style scoped>
.select{
  background-color: pink;
}
</style>
