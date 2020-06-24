<template>
  <div class="rexiao">
    <div class="word">
        <span>{{alldatas.name}}</span>
        <h3>{{alldatas.description}}</h3>
        <a href="#">查看更多 ></a>
    </div>
    <div class="lunbo">
        

        <!-- <el-carousel class="lunbobox" indicator-position="none" :autoplay='autoplay' height='400'>
            <el-carousel-item class="lunboitem" v-for="item in 2" :key="item"> -->
                <el-card  class="itemwrap" v-for="i in rexiaodata" :key="i.name" shadow="hover">
                    <div class="itemwrapimg">
                        <img :src="imgheader+i.imagePath+imgfooter" alt="">
                    </div>
                    <div class="itemintro">
                        <router-link to='/goodList'><h3 class="itemtitle1">{{i.name}}</h3></router-link>
                        <p class="itemtitle2">{{i.description}}</p>
                        <p class="itemtitle3">{{i.salesTips}}</p>
                    </div>
                </el-card>
            <!-- </el-carousel-item>
        </el-carousel> -->

        
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{    //  //imgpub.chuangkit.com/print_center_banner/2020/03/25/8IHhd?v=1585843200000&x-oss-process=image/resize,w_400
            autoplay:false,
            imgheader:'//imgpub.chuangkit.com/print_center_banner/',
            imgfooter: '?v=1585843200000&x-oss-process=image/resize,w_400',
            imgurl:"2020/01/19/A0Igf",
            alldatas:[],
            rexiaodata:[],
        }
    },
    created(){
        let url = '/api/print_center_item/print_item_cache?v=1586267165683'
        let url1 = '/api/data.json'
        this.$ajax.get(url1).then(res=>{
            // console.log(res.data.JSON)
            let jsondata = res.data.JSON
            // console.log(jsondata)
            this.alldatas = jsondata[0]
            this.rexiaodata = jsondata[0].items
        })
        
    },
    methods:{
        
    }
}
</script>

<style scoped>
  .rexiao{
      /* background: chartreuse; */
      /* height: 400px; */
      width: 1240px;
      margin: 0 auto;
      margin-top: 40px;
      overflow: hidden;
  }
  .word{
      width: 1240px;

      display: flex;
      justify-content: space-between;
  }
  .word span{
      font-size: 24px;
      font-weight: 600;
  }
  .lunbo{
    width: 1260px;
    /* height: 400px; */
    margin: 0 auto;
    margin-top: 20px;
    /* display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; */
    position: relative;
    /* overflow: hidden; */
  }
  .lunboitem{
      display: flex;
      justify-content: space-around;
  }
  

  .itemwrap{
    overflow: hidden;
    width: 295px;
    height: 400px;
    display: block;
    margin-right: 20px;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .3s;
    transition: all .3s;
    margin-bottom: 20px;
    float: left;
    cursor: pointer;
  }
  .itemwrapimg{
    width: 235px;
    height: 191px;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
  }
  .itemwrapimg img{
    max-width: 235px;
    height: 100%;
    max-height: 202px;
  }
  .itemintro{
    width: 100%;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 15px;
    
  }
  .itemtitle1{
    font-weight: 600;
    color: #000;
    font-size: 16px;
    margin-bottom: 20px;
    
  }
  .itemtitle2{
    color: #9b9b9b;
    font-size: 12px;
    overflow: hidden;
    width: 20em;
    margin: 0 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .itemtitle3{
    margin-top: 32px;
    font-size: 16px;
    color: #f12c20;
  }
</style>