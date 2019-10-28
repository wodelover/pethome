<template>
  <div class="main">
    <el-container>
      <el-header>header</el-header>
      <div class="submenu">
        <el-container>
          <el-aside width="200px">
            <el-button type="primary" plain style="width:190px;" @click="onHardwareStatusClicked" >状态信息</el-button>
            <el-button type="primary" plain style="width:190px;" @click="onRemoteControlClicked" >远程控制</el-button>
          </el-aside>
          <router-view name="default"></router-view>
        </el-container>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    onHardwareStatusClicked() {
      // 跳转到状态页面
      this.$router.push('/status')
    },
    onRemoteControlClicked() {
      // 跳转到远程控制页面
      this.$router.push('/remotecontrol')
    }
  }
};
</script>

<style>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>