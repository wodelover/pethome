<template>
  <div>
    <el-row :gutter="10">
      <el-col>
        <el-switch
          v-model="lightStatus"
          active-color="#13ce66"
          :active-text="lightStatusText"
          inactive-color="#b3c0d1"
          @change="onLightStatusChanged"
        ></el-switch>
      </el-col>
      <el-col>
        <el-switch
          v-model="changeOfAirStatus"
          active-color="#13ce66"
          :active-text="changeOfAirStatusText"
          inactive-color="#b3c0d1"
          @change="onChangeOfAirStatusChanged"
        ></el-switch>
      </el-col>
      <el-col>
        <el-switch
          v-model="keepTempStatus"
          active-color="#13ce66"
          :active-text="keepTempStatusText"
          inactive-color="#b3c0d1"
          @change="onKeepTempStatusChanged"
        ></el-switch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightStatus: false,
      lightStatusText: "照明",
      changeOfAirStatus: false,
      changeOfAirStatusText: "换气",
      keepTempStatus: false,
      keepTempStatusText: "恒温"
    };
  },

  methods: {
    // getUpdate() {
    //   setInterval(() => {
    //     this.$http.getControlDefaultStatus().then(resp => {
    //       this.lightStatus = resp.data.light;
    //       // if ("true" === this.lightStatus) {
    //       //   this.lightStatusText = "已打开照明";
    //       // } else {
    //       //   this.lightStatusText = "已关闭照明";
    //       // }

    //       this.changeOfAirStatus = resp.data.changeAir;
    //       // this.onChangeOfAirStatusChanged();
    //       this.keepTempStatus = resp.data.keepTemp;
    //       // this.onKeepTempStatusChanged();
    //     });
    //   }, 2000);
    // },
    onLightStatusChanged() {
      this.$http.changeLightStatus(this.lightStatus).then(resp => {});
    },
    onChangeOfAirStatusChanged() {
      this.$http.changeAirStatus(this.changeOfAirStatus).then(resp => {});
    },
    onKeepTempStatusChanged() {
      this.$http.changeKeepTempStatus(this.keepTempStatus).then(resp => {});
    }
  }
};
</script>

<style>
.el-col {
  margin-left: 10px;
  margin-top: 10px;
}
</style>