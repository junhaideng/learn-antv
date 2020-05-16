<template>
  <div>
        <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" item-layout="horizontal" :data-source="data" :split="false">
          <a-list-item slot="renderItem" slot-scope="item, index">
           
           <a-row :style="{ margin: 'auto'}">
             <a-col :span="24" >
                <a-tag>{{index}}</a-tag> : <a :href="item.href">{{item.title}}</a>
             </a-col>
           </a-row>
          </a-list-item>
        </a-list>
  </div>
</template>

<script>
import Base from "../common/Base";


// 存放各个chart的链接
const data = [
  {
    title: "柱状图",
    href: "/chart/interval",
  },{
    title: "散点图",
    href: "/chart/point"
  }
]

export default {
  name: "Home",
  components: {
    Base,
  },
  data(){
    return {
      data,
    }
  }
};
</script>
