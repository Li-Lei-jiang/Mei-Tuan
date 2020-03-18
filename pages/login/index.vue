<template>
  <div>
    <div class="warp">
      <div class="head">
        <div class="head_log">
          <img src="../../image/login-log.jpg" alt />
        </div>
      </div>
      <div class="center_all">
        <div>
          <img src="../../image/login-tp.jpg" alt />
        </div>
        <div class="centr_rig">
          <div class="rig_tx1">
            <div class="rig_tx1_lift">账号登录</div>
            <div class="rig_tx1_rig">
              <div>手机动态码登录</div>
              <div>
                <img src="../../image/shouj.jpg" alt class="rig_tx1__tp" />
              </div>
            </div>
          </div>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <FormItem prop="open">
              <div class="center_open">
                <div>+86 ></div>
                <div class="center_open_inp">
                  <Input type="text" placeholder="手机号" v-model="formValidate.open" style="border:0"/>
                </div>
              </div>
            </FormItem>
            <FormItem prop="password">
              <div class="center_numb">
                <div class="center_numb_tp">
                  <img src="../../image//suo.jpg" alt />
                </div>
                <div class="center_open_inp">
                  <Input type="password" placeholder="密码" v-model="formValidate.password" style="border:0"/>
                </div>
              </div>
            </FormItem>
          </Form>
          <div class="hint">忘记密码？</div>
          <div class="logins" @click="login_run">登录</div>
          <p class="center_end" @click="toLogins">
            还没账号?
            <a href>免费注册</a>
          </p>
          <div class="center_end_tx">———— 用合作网站账号登录 ————</div>
          <div>
            <div class="center_ends">
              <div>
                <img src="../../image/qq.jpg" alt />
              </div>
              <div>
                <img src="../../image/xl.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="end_">
        <div class="end_kuang">
          <div class="end_kuang_txt">关于美团</div>
          <div class="end_kuang_txt">加入我们</div>
          <div class="end_kuang_txt">商家入驻</div>
          <div class="end_kuang_txt">帮助中心</div>
          <div class="end_kuang_txt">美团手机版</div>
        </div>
      </div>
      <div class="endses">©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        open: "",
        password: ""
      },
      ruleValidate:{
          open:[
            {required: true, message: 'The open cannot be empty', trigger: 'blur'},
            { type: 'string',max:11, message: 'No more than 11 words', trigger: 'blur' }
          ],
          password:[
            {required: true, message: 'The password cannot be empty', trigger: 'blur'},
            { type: 'string', max:11, message: 'No more than 11 words', trigger: 'blur' }
          ]
      }
    };
  },
  components: {},
  methods: {
    login_run() {
      let Obj = {},
        username = "";
      Obj.username = this.formValidate.open;
      Obj.password = this.formValidate.password;
      console.log(Obj);
      this.$axios
        .post(`/users/login`, Obj)
        .then(res => {
          if (res.data.code === 200) {
           this.$Message.success ('登录成功');
            this.$router.push('/')
          } 
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // input(e){
    //     console.log(e)
    // },
    toLogins() {
      this.$router.push("/logins");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.warp {
  width: 70%;
  margin: 0 auto;
}
.head {
  height: 100px;
}
.head_log {
  padding-top: 2%;
}
.center_all {
  display: flex;
  justify-content: space-between;
}
.centr_rig {
  width: 270px;
}
.rig_tx1 {
  display: flex;
  justify-content: space-between;
  margin-top: 17%;
  height: 25px;
}
.rig_tx1_lift {
  font-size: 16px;
}
.rig_tx1_rig {
  display: flex;
  line-height: 25px;
}
.rig_tx1__tp {
  width: 22px;
  height: 19px;
}
.center_open {
  display: flex;
  height: 40px;
  margin: 3% 0;
  border: 1px solid;
  line-height: 40px;
  justify-content: space-between;
}
.center_open_inp {
  height: 38px;
  line-height: 38px;
  width: 85%;
}
.center_open_inp input {
  height: 100%;
  width: 100%;
  border: 0;
  padding-left: 3%;
}
.center_numb {
  display: flex;
  height: 40px;
  margin: 3% 0;
  border: 1px solid;
  line-height: 40px;
  justify-content: space-between;
}
.center_numb_tp {
  height: 23px;
  width: 21px;
  position: relative;
  top: 7px;
  left: 6px;
}
.hint {
  text-align: right;
  color: #ffc300;
  height: 25px;
  font-size: 14px;
  line-height: 25px;
}
.logins {
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  background: #ffc300;
  height: 34px;
  line-height: 34px;
  margin: 3% 0;
}
.center_end {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.center_end a {
  color: #ffc300;
}
.center_end_tx {
  text-align: center;
  color: #cdcdcd;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
}
.center_ends {
  display: flex;
  width: 20%;
  margin: 0 auto;
}
.end_ {
  // line-height: 50px;
  height: 50px;
  border-top: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
}
.end_kuang {
  height: 25px;
  display: flex;
  margin-top: 2%;
}
.end_kuang_txt {
  height: 19px;
  width: 70px;
  text-align: center;
  border-right: 1px solid #cdcdcd;
}
.endses {
  line-height: 50px;
  height: 50px;
}
</style>