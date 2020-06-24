<template>
  <div class="home">
    
    <bigbanner></bigbanner>
    <rexiao></rexiao>
    <zhanhui></zhanhui>
    <qiye></qiye>
    <gexing></gexing>
    <zhaopian></zhaopian>
    <bangong></bangong>

    <backtop></backtop>


  </div>
</template>

<script>

import bigbanner from '@/components/bigbanner.vue'

import rexiao from '@/components/Home/rexiao.vue'
import zhanhui from '@/components/Home/zhanhui.vue'
import qiye from '@/components/Home/qiye.vue'
import gexing from '@/components/Home/gexing.vue'
import zhaopian from '@/components/Home/zhaopian.vue'
import bangong from '@/components/Home/bangong.vue'
import backtop from '@/components/Home/backtop.vue'

export default { 
  components:{  bigbanner , rexiao , zhanhui ,qiye , gexing , zhaopian , bangong , backtop},
}
</script>

<style lang="scss">
  body{
    background: #f3f4f7;
    
  }
  
</style>
