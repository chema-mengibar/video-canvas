<script>
import LogoH from './logo-h.vue'
import IconBars from "../components/icons/icon-bars.vue";

export default {
  inject: ['$services'],
  name: 'Header',
  props: {
  
  },
  data: ()=>( {
    t: {}
  }),
  created(){
    this.t = this.$services.localeService.D();
  },
  methods: {
    goHome: function(){
     
      this.$router.push({name:'Home',  query: { ...this.$route.query }})
    },
    goToMenu: function(){
  
      this.$router.push({name:'Menu',  query: { ...this.$route.query }})
    },
  },
  components: {
    LogoH,
    IconBars,
  },
  computed: {
    isMinimal: function() {

        return '';
   
    }
  },
  mounted() {
    //
  },
 
}
</script>

<style lang="scss">

@import '../styles/media';

.header-container{
  display:flex;
  position: fixed;
  width:inherit;
  z-index: 10;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color:var(--app-bg-color);
  border-bottom: 1px solid rgba(0,0,0,.1);
  height:var(--header-height);
  align-items:center;

  &.minimal{
    opacity: 0.2;

    .menu-button{
     
      color: var(--neutral-color-rgb);
  
    }

  }
}

.header-logo{
  margin-right: auto;
  cursor:pointer;
}


.menu-button{
  display:flex;
  justify-content:center;
  align-items:center;
  width: 36px;
  height: 36px;
  border-radius:18px;
  background-color:var(--app-bg-color);
  color: var(--primary-color-rgb);
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.10));
  cursor: pointer;

  &.minimal{
    color: var(--neutral-color-rgb);
  }
}


</style>

<template>
<div class="app-layout-header header-container"
  :class="isMinimal"
>

  <div class="logo header-logo" v-on:click="goHome()">
    <LogoH :s="0.5" />
  </div>

  <div class="menu-button" v-on:click="goToMenu()">
    <IconBars w="18" h="18" />
  </div>
  </div>


</template>