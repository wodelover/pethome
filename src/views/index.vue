<template>
  <div class="main">
    <el-container>
      <el-header>header</el-header>
      <el-tabs tab-position="left">
        <el-tab-pane label="状态信息">
          <StatusPage></StatusPage>
        </el-tab-pane>
        <el-tab-pane label="远程控制">
          <RemoteControlPage></RemoteControlPage>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
// 导入子页面组件
import RemoteControlPage from "./remoteControlPage";
import StatusPage from "./statusPage";

export default {
  data() {
    return {};
  },
  components: {
    StatusPage,
    RemoteControlPage
  },
  methods: {
    onHardwareStatusClicked() {
      // 跳转到状态页面
      this.$router.push("/status");
    },
    onRemoteControlClicked() {
      // 跳转到远程控制页面
      this.$router.push("/remotecontrol");
    }
  }
};
</script>

<style>

.el-container, .el-tabs{
  height: 100vh;
}

.el-header,.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px !important;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>