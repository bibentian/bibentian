<template>
  <div class="nav">
    
    <router-link to="/" class="logoimg">
      <img class="logo" src="https://www.chuangkit.com/distprint/img/header_logo_news.93678434.svg" alt="">
    </router-link>

    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal" 
      @select="handleSelect"
    >
      
      <el-menu-item index="3">设计工具</el-menu-item>
      
      

      <el-submenu index="2">
        <template slot="title">模板中心</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="1">在线印刷</el-menu-item>

      <el-submenu index="4">
        <template slot="title">功能介绍</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <template slot="title">选项4</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
          <el-menu-item index="4-4-2">选项2</el-menu-item>
          <el-menu-item index="4-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">. . .</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
        
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">个人VIP</template>
        <el-menu-item index="6-1">选项1</el-menu-item>
        <el-menu-item index="6-2">选项2</el-menu-item>
        <el-menu-item index="6-3">选项3</el-menu-item>
        
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">企业VIP</template>
        <el-menu-item index="7-1">选项1</el-menu-item>
        <el-menu-item index="7-2">选项2</el-menu-item>
        <el-menu-item index="7-3">选项3</el-menu-item>
        
      </el-submenu>


    </el-menu>

    <div class="search" >
      <div class="searchbox">
        <el-input class="searchipt" v-model="input" placeholder="请输入要搜索的商品"></el-input>
        <el-button class="searchbtn" type="primary">搜索</el-button>
      </div>
    </div>

    <div class="login">
      <router-link to='/login'>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </router-link>
      
      <el-button type="text">登陆</el-button>
      <el-button type="text">注册</el-button>
    </div>

    
    
    
  </div>
</template>

<script>


export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:"",
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>



<style scoped>
  .nav{
    display: flex;
    justify-content: space-between;
    background: white;
    min-width: 1300px;
    /* position: fixed;
    z-index: 9999999; */
  }
  .logoimg{
    display: flex;
    align-items:center;
    width: 125px;
    /* padding-left: 30PX; */
  }
  .logoimg img{
    width: 250px;
  }
  .logoimg,.el-menu-demo{
    float: left; 
  }

  .search{
    /* width: 300px; */
    display: flex;
    align-items:center;
    /* border: 1px solid #0773fc; */
  }
  .search .searchbox{
    /* width: 400px; */
    display: flex;
    align-items:center;
    /* border: 1px solid #0773fc; */
  }
  
  .searchbox .searchipt>>>.el-input__inner{
    border-radius:22px 0 0 22px;
    border: 1px solid #0773fc!important;
    
    /* display: flex;
    align-items:center; */
    
  }
  
  .search .searchbtn{
    border-radius:0 22px 22px 0;
  }
  .login{
    float: right;
    width: 150px;
    display: flex;
    align-items:center;
    
  }
  .logo{
    width:125px;
    height:44px;
     
  }
  
</style>


