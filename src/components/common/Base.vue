<template>
  <a-layout>
    <a-layout-content :style="{ height: height, width: width, margin: 'auto' }">
      <div
        :style="{
          background: '#fff',
          padding: '24px',
          minHeight: height,
          margin: 'auto',
        }"
      >
        <div :style="{ marginTop: '20px' }"></div>
        <router-link to="/">返回首页</router-link>

        <a-row :style="{ margin: 'auto', textAligin: 'center' }">
          <a-col :span="20" :offset="2">
            <router-view></router-view>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer> </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "Base",
  props: {
    height: {
      default() {
        return "678px";
      },
    },
    width: {
      default() {
        return "80%";
      },
    },
  },
};
</script>
