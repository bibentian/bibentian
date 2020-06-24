<template>

  <div class="bannerbox">
    <div class="bannernav"  @mouseleave="leave()"> 
      <div class="navleft">
        <ul>
          <li v-for="(li,index) in alldatas" :key="li.index" :class="{active:num == index}" @mouseenter="getNum(index)" >{{li.name}}</li>
        </ul>
      </div>

      <div class="navright" v-show="action">
        <div class="everynav" v-for='(li,index) in alldatas' :key="li.index" v-show="index == num">

          <div class="navitem" v-for="eve in li.items" :key='eve.index'>
            <div class="navitemimg">
              <img :src="imgheader+eve.imagePath+imgfooter" alt="">
            </div>
            <div class="navitemword">
              <div class="wordcenter">
                <h1>{{eve.name}}</h1>
                <p>{{eve.description}}</p>
              </div>
            </div>
          </div>
          
          

        </div>
      </div>
      

    </div>

    <div class="block">
      <el-carousel height="430px">
        <el-carousel-item v-for="ban in banners" :key="ban.index">
          <img :src="ban.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
export default {
    data() {
      return {
        
        action: false,
        num: null,
        imgheader:'//imgpub.chuangkit.com/print_center_banner/',
        imgfooter: '?v=1585843200000&x-oss-process=image/resize,w_400',
        imgurl:"",
        alldatas:[],
        rexiaodata:[],
        banners:[
          {url:"http://imgpub.chuangkit.com/print_center_banner/2020/04/06/SZCxy?v=1585843200000&x-oss-process=image/resize,w_1240"},
          {url:"http://imgpub.chuangkit.com/print_center_banner/2020/04/07/BcPx6?v=1585843200000&x-oss-process=image/resize,w_1240"},
          {url:"http://imgpub.chuangkit.com/print_center_banner/2020/04/08/eL2u8?v=1585843200000&x-oss-process=image/resize,w_1240"},
          {url:"http://imgpub.chuangkit.com/print_center_banner/2020/01/19/A0Igf?v=1585843200000&x-oss-process=image/resize,w_1240"},
          {url:"http://imgpub.chuangkit.com/print_center_banner/2019/06/03/ZdNYp?v=1585843200000&x-oss-process=image/resize,w_1240"},
        ],
      };
    },
    created(){
      let url = '/api/print_center_item/print_item_cache?v=1586267165683'
        let url1 = '/api/data.json'
        this.$ajax.get(url1).then(res=>{
            // console.log(res.data.JSON)
            let jsondata = res.data.JSON
            // console.log(jsondata)
            this.alldatas = jsondata
            this.rexiaodata = jsondata[0].items
        })

    },
    methods: {
        getNum(index) {
          this.num = index;
          this.action = true 
        },
        leave(){
          this.action = false
          this.num = null
        }
        
    }
}
</script>

<style lang="scss" scope>
  .bannerbox{
    width: 1240px;
    height: 430px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .bannernav{
    width: 200px;
    height: 430px;
    float: left;
    background: #1b2337;
    position: relative;
  }
  .navleft ul{
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end
  }
  .navleft li{
    width: 175px;
    height: 36px;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    font-size: 14px;
    color: hsla(0,0%,100%,.8);
    line-height: 36px;
    text-indent: 20px;
  }
  .active{
    background: rgb(78, 72, 88)!important;
    color: white;
  }
  .navright{
    // height: 430px;
    background: white;
    position: absolute;
    top: 0;
    left: 200px;
    z-index: 999;
    // overflow: hidden;

  }
  .everynav{
    height: 400px;
    padding: 15px;
    // background: cornflowerblue;
    // display: inline-flex;
    // flex-wrap: wrap;
    // flex-direction:column;
    // flex-shrink: 0;
    display: inline-flex;/* 定义为inline-flex */
    flex-wrap: wrap;/* 设置换行，默认是不换行的 */
    writing-mode: vertical-lr;/* 盒子从左开始垂直排列 */
    
  }
  .navitem{
    width: 220px;
    height: 80px;
    // background: white;
    margin: 10px;
    height: calc(100% / 5);/* 定义子元素高度 */
    writing-mode: horizontal-tb;/* 定义子元素水平排列，默认垂直排列 */
  }
  .navitemimg{
    width: 80px;
    height: 80px;
    float: left;
  }
  .navitemimg img{
    width: 100%;
  }
  .navitemword{
    width: 140px;
    height: 80px;
    // background: wheat;
    float: left;
    
  }
  .wordcenter h1{
    margin: 20px 0 10px 0; 
    color: rgb(61, 60, 60);
    font-size: 14px;
  }
  .wordcenter p{
    margin-right: 5px;
    color: #9b9b9b;
    font-size: 12px;    
    margin: 0 auto;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }


  .block{
    width: 1040px;
    float: left;
  }
  .block img{
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>