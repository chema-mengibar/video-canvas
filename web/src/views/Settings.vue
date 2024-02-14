<script>
import Header from "../components/header.vue";
export default {
  name: "Settings",
  inject: ["$services"],
  data: () => ({
    t: () => {},
    lastName: "",
  }),
  methods: {},
  created() {
    this.t = this.$services.localeService.t();
  },
  mounted() {},
  components: { Header },
};
</script>

<style  lang="scss">
@import "../styles/media";
</style>

<template>
  <Header />

  <div class="app-layout-body">Settings</div>
</template>