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
  import {Chart} from "@antv/g2";

  export default {
    name: "Interval",
    components: {
      Base,
    },
    data() {
      return {
        data: [],
        chart: undefined,
        title: "柱形图",
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
              .get("/api/get_interval_data")
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
          autoFit: true, // 自适应大小 ， 设置之后width， height 不生效
          width: 600,
          height: 500,
        });
        this.chart.data(this.data); // 加载数据
        this.chart.scale({
          type: {
            alias: "种类",
            range: [0.05, 0.95]
          },
          value: {
            alias: "值"
          }
        });
        this.chart.axis("type", {
          title:{
            style:{
              fontSize: 20
            }
          }
        })
        this.chart.axis("value", {
          title:{
            style:{
              fontSize: 20
            }
          }
        })

        this.chart.legend({
          title: {}
        });

        this.chart.tooltip({
          showMarkers: false,
          showCrosshairs: false
        });

        this.chart.interaction('active-region');

        this.chart
            .interval() // 柱状图
            .position("type*value");  // type -> x轴     value -> y轴

        this.chart.render();  // 渲染
      },
    },
  };
</script>
