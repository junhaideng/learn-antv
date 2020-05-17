<template>
  <div>
    <a-row :style="{ margin: 'auto', textAlign: 'center' }">
      <h2>{{ title }}</h2>
    </a-row>

    <div id="chart"></div>
  </div>
</template>

<script>
import Base from "../common/Base";
import { Chart } from "@antv/g2";

export default {
  name: "",
  components: {
    Base,
  },
  data() {
    return {
      data: [],
      chart: undefined,
      title: "",
    };
  },
  mounted() {
    this.set().then(() => {
      this.draw();
    });
  },
  methods: {
    set() {
      // 设置数据，因为是异步请求的数据，必须在请求到数据之后设置 chart
      return new Promise((resolve, reject) => {
        this.$axios
          .get("/api/get_xxx_data")
          .then((res) => {
            this.data = res.data.data;
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    draw() {
      this.chart = new Chart({
        container: "chart", // 容器
        autoFit: true,  // 自适应大小 ， 设置之后width， height 不生效
        width: 600,
        height: 500,
      });
      this.chart.data(this.data);  // 加载数据

      this.chart
        .point()  // 散点图
        .position("feature*value")
        .color("phone"); // 分类
      this.chart.render();
    },
  },
};
</script>
