<template>
  <div class="shop">
    <!-- <div class="shopcar">
        <el-button class="buy" @click="drawer = true" type="primary" style="margin-left: 16px;">
            购物车
        </el-button>

        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :with-header="false"
        >
            <span>我来啦!</span>
        </el-drawer>
    </div> -->

    <!-- <div class="backtop">
        <el-backtop :bottom='100'></el-backtop>
        
    </div> -->

  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        };
    }
}
</script>

<style scoped>
    /* .shop{
        width: 50px;
        height: 192px;
        position: absolute;
        top: 50%;
        margin-top: -79px;
        right:10px;
        border-right: none;
        cursor: pointer;
        background: skyblue;
    }
    .shopcar{
        position: fixed;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    } */
</style>