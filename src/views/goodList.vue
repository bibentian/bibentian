<template>
  <div class="goodlist">
    
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品详情</el-breadcrumb-item>
            
        </el-breadcrumb>
    </div>

    <div class="shangpinbox">
      <div class="boxleft">
        <div class="fangdajing">
          <pic-zoom :url="fdjimg1" :scale="3"></pic-zoom>     
        </div>

        <div class="choosebox">
          <div 
            class="chooseimg" 
            v-for="(ch,index) in fdjimg" 
            :key="ch.id"
            :class="{active:num == index}"
            @mouseenter="changeimg(index)" 
          >
            <img :src="ch.src" alt="">
          </div>
        </div>

        <div class="nicetips">
          <p>温馨提示：</p>
          <p>1、下单前建议您阅读“
            <a class="blueunderline" href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=808&extra=">注意事项</a>
            ”，并对稿件进行核对，以便顺利出货。
          </p>
          <p>2、订单完成后，可在订单中心申请发票。
            <a class="blueunderline" href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=380&page=1">查看发票事项</a>
          </p>
          <p>3、如有更多需求或疑问，请 
            <a class="blueunderline" href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=808&extra=">联系客服</a>
          </p>
        </div>
      </div>

      <div class="boxright">
        <div class="boxrighttop">
          <div class="boxrighttoptitle">
            <h3>宣传单</h3>
            <p>当天16:30前下单，24小时内发货</p>
          </div>
        </div>

        <div class="boxrightprice">
          <p class="jiage">
            价格
            <span class="newprice">￥125</span>
            <span class="oldprice">￥179</span>
            <span class="preferential">七折包邮/足数足量</span>
          </p>
          <div class="single">
            <p>服务</p>
            <div class="service">
              <span><i></i>全国包邮</span>
              <span><i></i>极速开票</span>
              <span><i></i>高端设备</span>
              <span><i></i>专属客服 售后无忧</span>
            </div>
          </div>
          <div class="single">
            <p>销量</p>
            <div class="service">
              <span class="basesale">
                113029
              </span>
            </div>
          </div>
        </div>

        <div class="boxrightbottom">
          <p>
            <strong>纸张</strong>
            <span class="paperchoose">
              <span class="orderred recommend">行标157g铜版纸</span>
              <span>国标157g铜版纸</span>
              <span>200g铜版纸</span>
              <span>250g铜版纸</span>
            </span>
          </p>
          <p>
            <strong>工艺</strong>
            <span class="paperchoose">
              <span class="orderred">无工艺</span>
              
            </span>
          </p>
          <p>
            <strong>数量</strong>
            <span class="paperchoose">
              <span class="orderred">500张</span>
              <span>1000张</span>
              <span>2000张</span>
              <span>3000张</span>
              <span>5000张</span>
            </span>
          </p>
          <p>
            <strong>种类</strong>
            <span class="paperchoose">
              <span class="orderred">行标157g铜版纸</span>
              <span>国标157g铜版纸</span>
              <span>200g铜版纸</span>
              <span>250g铜版纸</span>
            </span>
          </p>
        </div>

        <div class="buynow">
          <div>
            <span class="buynowleft">立即购买</span>
            <span class="buynowright">加入购物车</span>
          </div>
          <p>当天16:30前下单，24小时内发货</p>
        </div>
      </div>
    </div>
    
    <div class="shangpinbottom">
      <div class="leftrecommend">
        <p class="title">相关推荐</p>
        <div class="itemlist">
          <div class="itemlistscroll">

            <div class="itemwrap" v-for="e in rexiaodata" :key='e.index'>
              <div class="itemwrapimg">
                <img :src="imgheader+e.imagePath+imgfooter" alt="">
              </div>
              <div class="itemintro">
                <h3 class="itemtitle1">{{e.name}}</h3>
                <p class="itemtitle2">{{e.description}}</p>
                <p class="itemtitle3">{{e.salesTips}}</p>
              </div>
            </div>

            

          </div>
        </div>
      </div>

      <div class="rightcommodity">
        <div class="switchbar">
          <span class="activespan">商品详情</span>
        </div>
        <div class="orderdetails">
          <div class="detailsimg">
            <p style="text-align:center">
              <img src="https://imgpub.chuangkit.com/editor_image/print_product_detail_desc/af6913dfed734173a15ae2f2f97d385c" alt="">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PicZoom from 'vue-piczoom'
export default { 
  components: {
    PicZoom
  },
  data() {
    return{
      num:'',
      fdjimg1:"https://imgpub.chuangkit.com/print/show/3?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",
      fdjimg:[
        {id:1,src:"https://imgpub.chuangkit.com/print/show/3?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",  },
        {id:2,src:"https://imgpub.chuangkit.com/print/show/3_1?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",},
        {id:3,src:"https://imgpub.chuangkit.com/print/show/3_2?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",},
        {id:4,src:"https://imgpub.chuangkit.com/print/show/3_3?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",},
        {id:5,src:"https://imgpub.chuangkit.com/print/show/3_4?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",},
        {id:6,src:"https://imgpub.chuangkit.com/print/show/3_5?v=1585885484221&x-oss-process=image/resize,h_480,w_480,q_80",}
      ],
      imgheader:'//imgpub.chuangkit.com/print_center_banner/',
      imgfooter: '?v=1585843200000&x-oss-process=image/resize,w_400',
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
  methods: {
      changeimg(index) {
        this.num = index;
        // console.log(this.num)
        this.fdjimg1=this.fdjimg[index].src
      }
  }
}
</script>

<style lang="scss" scoped>
  body{
    background: #f3f4f7;
  }
  .goodlist{
    width: 1240px;
    margin: 0 auto;
    
  }
  .breadcrumb{
      
      padding: 24px 0;
  }
  .shangpinbox{
    height: 800px;
    width: 1160px;
    padding: 0 40px;
    background: white;
  }
  .boxleft{
    width: 580px;
    height: 700px;
    // background: yellow;
    margin: 40px 0;
    float: left;
  }
  .fangdajing{
    width: 480px;
    height: 480px;
    // background: skyblue;
  }
  .choosebox{
    width: 500px;
    height: 120px;
    // background: slateblue;
  }
  .active{
    border: 1px solid blue;
    // box-sizing: border-box;
  }
  .chooseimg{
    width: 70px;
    height: 70px;
    margin: 12px 12px 0 0 ;
    float: left;
    cursor: pointer;
    box-sizing: border-box;
  }
  .chooseimg img{
    width: 100%;
  }

  .nicetips{
    color: #000;
    font-size: 12px;
  }
  .nicetips p:first-child{
    font-weight: 600;
    color: #333;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .nicetips p:not(:first-child){
    font-size: 12px;
    color: #999;
    line-height: 20px;
  }
  .blueunderline{
    color: #0773fc;
    text-decoration: underline;
    cursor: pointer;
  }


  .boxright{
    width: 580px;
    height: 700px;
    // background: skyblue;
    margin: 40px 0;
    float: left;
  }
  .boxrighttoptitle{
    margin-bottom: 20px;
  }
  .boxrighttop .boxrighttoptitle h3{
    font-weight: 600;
    font-size: 24px;
    color: #000;
    margin-bottom: 10px;
    width: 21em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .boxrighttop .boxrighttoptitle p{
    font-size: 14px;
    color: #000;
  }

  .boxrightprice{
    width: 580px;
    background: #f3f4f7;
    margin-bottom: 12px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
  }
  .jiage{
    height: 75px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    font-size: 14px;
    color: #606162;
    padding: 0 20px;
    padding-bottom: 20px;
  }
  .newprice{
    font-size: 30px;
    color: #f12c20;
    margin: 0 20px;
    line-height: 26px;
    margin-left: 13px;

  }
  .oldprice{
    text-decoration: line-through;
  }
  .preferential{
    padding: 5px 17px;
    font-weight: 300;
    line-height: 20px;
    color: #fff;
    display: inline-block;
    background: #f12c20;
    margin-left: 20px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    right: -10px;
    top: 25px;
    text-align: center;
  }
  .single{
    background-color: #f3f4f7;
    font-size: 14px;
    color: #606162;
    padding-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 20px;
    border-top: 1px solid rgba(0,0,0,.1);
    // margin-bottom: 10px;
    position: relative;
  }
  .single p{
    flex-shrink: 0;
  }
  .service{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .service span{
    margin-bottom: 30px;
    color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 34px;
    color: #000;
    position: relative;
  }
  .service span i{
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #f12c20;
    margin-right: 8px;
    position: absolute;
    left: -15px;
    top: 7px;
  }
  .service .basesale{
    color: #f12c20;
    margin-left: 18px;
  }
  .boxrightbottom{
    margin-bottom: 24px;
    margin-left: 20px;
    float: left;
    width: 580px;
  }
  .boxrightbottom p{
    font-size: 12px;
    color: #333;
  }
  .boxrightbottom p strong{
    float: left;
    margin-top: 25px;
    margin-right: 10px;
    font-size: 14px;
    color: #606162;
  }
  .boxrightbottom p span{
    font-size: 14px;
    color: #999;
    display: inline-block;
    border: 1px solid #999;
    margin-left: 8px;
    line-height: 24px;
    padding: 0 8px;
    cursor: pointer;
  }
  .paperchoose{
    border: 0!important;
    margin-left: 4px!important;
    padding: 0!important;
    max-width: 530px!important;
  }
  .paperchoose span{
    font-size: 12px;
    color: #606162;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-left: 8px;
    margin-top: 16px;
    line-height: 24px;
    text-align: center;
    padding: 4px 18px;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
  .orderred{
    border-color: #0773fc;
    color: #000;
    pointer-events: none;
  }
  .recommend{
    position: relative;
  }
  .recommend ::after{
    position: absolute;
    top: -3px;
    right: -3px;
    width: 30px;
    height: 30px;
    content: "";
    background: url(https://www.chuangkit.com/distprint/img/productDetails-recommend.4e3f0f12.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0;
    color: #187ff8;
  }

  .buynow{
    // background: burlywood;
    float: left;
    width: 608px;
    
    font-size: 12px;
    color: #828282;
    margin-bottom: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 64px;
    position: relative;
  }
  .buynowleft{
    display: inline-block;
    text-align: center;
    width: 171px;
    height: 46px;
    line-height: 46px;
    background: #0773fc;
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    margin-right: 24px;
    border: 1px solid transparent;
    
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .buynowright{
    display: inline-block;
    text-align: center;
    width: 171px;
    height: 46px;
    line-height: 46px;
    border: 1px solid #0773fc;
    border-radius: 4px;
    font-size: 18px;
    color: #0773fc;
    cursor: pointer;
    margin-right: 24px;
    
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .buynow p{
    font-size: 12px;
    height: 15px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
    cursor: pointer;
    margin-top: 16px;
  }

  .shangpinbottom{
    width: 100%;
    background: #f6f6f6;
    border-top: 6px solid #fff;
    padding-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .leftrecommend{
    width: 295px;
  }
  .leftrecommend .title{
    font-size: 16px;
    color: #000;
    padding: 16px 115px;
    background: #f9f9f9;
    font-weight: 700;
  }
  .itemlist{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .itemlistscroll{
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    transition: transform .4s;
    transition: transform .4s,-webkit-transform .4s;
    -webkit-transform: translateX(0);
    transform: translateX(0);
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
  .rightcommodity{
    margin-left: 20px;
    background: #fff;
  }
  .switchbar{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #f9f9f9;
  }
  .activespan{
    font-size: 14px;
    color: #333;
    font-weight: 700;
    background: #fff;
    border-top: 2px solid #368bff;
    padding: 17px 82px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
  .orderdetails{
    // width: 925px;
    padding: 40px;
  }
  .detailsimg{
    width: 845px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }
</style>
