<template>
  <div class="statusInfo">
    <el-row :gutter="20">
      <div class="content">
        <el-col :span="6">
          <el-card class="dht11">
            <!-- 温度显示区域 -->
            <div slot="header">asd</div>
            <div></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="dht11">
            <!-- 可燃气体显示区域 -->
            <div slot="header">a222</div>
            <div></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="dht11">
            <!-- 宠物在窝显示区域 -->
            <div slot="header">a222</div>
            <div></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="dht11">
            <!-- 可燃气体显示区域 -->
            <div slot="header">a222</div>
            <div></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="dht11">
            <!-- 宠物在窝显示区域 -->
            <div slot="header">a222</div>
            <div></div>
          </el-card>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .el-row {
  margin-top: 10px;
} */
.statusInfo {
  height: 100vh;
  text-align: center;
}
.el-col{
  justify-content: flex-start;
}
/* .el-card {
  margin-top: 10px;
} */
.content{
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
}
</style>