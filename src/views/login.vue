<template>
  <div class="login">
      <el-card>
          <div slot="header" class="loginHeader">
              登录
          </div>
          <div>
              <el-input v-model="username" placeholder="输入用户名"></el-input>
              <br><br>
              <el-input v-model="userpasswd" placeholder="登录密码"></el-input>
              <br><br>
              <div class="submit">
                  <el-button type="primary" plain style="width:260px;" @click="onSubmitClicked">登录</el-button>
              </div>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
    // 定义用户名和密码变量
    data(){
        return{
            username:'',
            userpasswd:''
        }
    },

    // 定义用户登录方法
    methods: {
        onSubmitClicked(){
            if(this.username==='admin' && this.userpasswd === '123'){
                var obj = {
                    username: this.username,
                    password: this.userpasswd
                }
                sessionStorage.setItem('user', JSON.stringify(obj));
                this.$router.push('/index')
            }else{
                console.log('123')
            }
        }
    },
}
</script>

<style>
.login{
    margin: 0 auto;
    width: 300px;
    margin-top: 150px;
}
.header{
    text-align: center;
}
.submit{
    text-align: center;
}
</style>