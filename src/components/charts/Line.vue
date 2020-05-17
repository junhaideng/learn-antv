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
  import { Chart } from "@antv/g2";  // 引入

  export default {
    name: "Interval",
    components: {
      Base,
    },
    data() {
      return {
        data: [],
        chart: undefined,
        title: "折线图",
      };
    },
    mounted() {
      this.set().then(() => {
        this.draw();
      });
    },
    methods: {
      set() {
        return new Promise((resolve, reject) => {
          this.$axios
              .get("/api/get_point_data")
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
          container: "chart",
          autoFit: true,
          width: 600,
          height: 500,
        });
        this.chart.data(this.data);

        // 配置坐标轴
        this.chart.scale({
          feature: {
            alias: "特性分类",  // 坐标轴和图例显示的名称
            range: [0, 1]
          },
          value: {
            alias: "值"
          }
        });



        this.chart.axis('feature', {
          title: {
            style: {
              fill: '#1890ff'
            }
          },
          grid: {
            type: "line",
            line: {
              style: {
                lineDash: [4]
              }

            },

          }
        });

        this.chart.axis("value", {
          title: {
            // position: "end",
            style: {
              fill: '#1890ff',
              fontSize: 20,
              fontStyle: "italic",
              shadowOffsetX: "20px",
            },

          }
        });
        this.chart.tooltip({
          showCrosshairs: true,
          crosshairs: {
            type: 'xy',
          }
        });

        this.chart
            .line()
            .position("feature*value")
            .color("phone")
            .shape("smooth");

        this.chart.render();
      },
    },
  };
</script>
