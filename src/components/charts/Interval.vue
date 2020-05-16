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
import G2 from "@antv/g2";

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
      return new Promise((resolve, reject) => {
        this.$axios
          .get("/api/get_column_data")
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
      this.chart = new G2.Chart({
        container: "chart",
        forceFit: true,
        width: 600,
        height: 300,
      });
      this.chart.source(this.data);

      this.chart
        .point()
        .position("feature*value")
        .color("phone");
      this.chart.render();
    },
  },
};
</script>
