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
      title: "散点图",
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

      this.chart
        .point()
        .position("feature*value")
        .color("phone")
        .shape("phone", ['circle', 'square', 'triangle'])
        .size(6);

      this.chart.tooltip({
        showCrosshairs: true,
        crosshairs: {
          type: "xy", // 展示十字辅助线
        },
      });

      this.chart.render();
    },
  },
};
</script>
