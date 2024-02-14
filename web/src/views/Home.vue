<script>
import Logo from "../components/logo.vue";
export default {
  name: "Home",
  inject: ["$services"],
  data: () => ({
    t: () => {},
    isLoading: true,
  }),
  methods: {},
  created() {
    this.t = this.$services.localeService.t();
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "Menu" });
    }, 4800);
  },
  components: {
    Logo,
  },
};
</script>

<style  lang="scss">
@import "../styles/media";

.home-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/assets/images/intro.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.intro-logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 7px;
  width: 240px;
  min-height: 250px;
  gap: 20px;
  padding: 20px;
  justify-content: space-around;
}

.loading {
  font-size: 14px;
  font-family: var(--font-hl);
}
</style>

<template>
  <div class="app-layout-body no-space">
    <div class="home-wrapper">
      <div class="intro-logo">
        <Logo />
        <div class="loading" v-if="isLoading">{{ t("loading") }}</div>
      </div>
    </div>
  </div>
</template>