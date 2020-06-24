<template>
  <div class="pathlist">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/login' }">返回</el-breadcrumb-item>
        <el-breadcrumb-item>库存</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="white"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pathlist {
  width: 1240px;
  margin: 0 auto;
}
.breadcrumb {
  padding: 24px 0;
}
.white {
  width: 1240px;
  margin: 30px auto;
  height: 800px;
  background: white;
}
</style>