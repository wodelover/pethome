<template>
  <div>
    <el-switch
      v-model="openLight"
      active-color="#13ce66"
      :active-text="statusText"
      inactive-color="#b3c0d1"
      @change='onLightStatusChanged'
    ></el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openLight: false,
      statusText: "打开照明"
    };
  },
  methods: {
    onLightStatusChanged(){
      if(this.openLight){
        this.statusText = '已打开照明'
      }else{
        this.statusText = '已关闭照明'
      }
    }
  }
};
</script>

<style>
</style>