<template>
  <div id="app">
    <dingbunav></dingbunav>
    <router-view />
  </div>
</template>

<script>
import dingbunav from '@/components/dingbunav.vue'
export default {
  name:"App",
  components:{ dingbunav  },

}
</script>

<style>
  /* #app{
    position: relative;
  } */
  
</style>