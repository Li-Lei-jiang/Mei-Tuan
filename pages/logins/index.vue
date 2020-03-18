<template>
  <div>
    <div class="logins_head">
      <div class="log_tp">
        <img src="../../image//logo.png" alt />
      </div>
      <div class="log_tp_rig">
        <div class="_rig_tx1">已有美团账号？</div>
        <div class="_rig_tx2" @click="tologin">登录</div>
      </div>
    </div>
    <div class="end_all">
      <div class="end_all_">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem label="手机号" prop="open">
            <Input type="text" v-model="formCustom.open"></Input>
          </FormItem>
          <FormItem label="短信验证" prop="dynamicCode">
            <Input type="password" v-model="formCustom.dynamicCode"></Input>
          </FormItem>
          <FormItem label="创建密码" prop="createPassword">
            <Input type="password" v-model="formCustom.createPassword"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="confirmPassword">
            <Input type="password" v-model="formCustom.confirmPassword"></Input>
          </FormItem>
        </Form>
      </div>

      <div class="ends_warp">
        <div class="ends" @click="goregister">同意以下协议并注册</div>

        <div class="ends_">
          <a href="https://rules-center.meituan.com/rules-detail/4">《美团点评用户服务协议》</a>
          <a href="https://rules-center.meituan.com/rules-detail/2">《美团点评隐私政策》</a>
        </div>
      </div>
    </div>
    <div class="endes">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
  </div>
</template>

<script>
export default {
  data() {
    const createPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.confirmPassword !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("confirmPassword");
        }
        callback();
      }
    };
    const confirmPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.createPassword) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      formCustom: {
        open: "", //手机号
        dynamicCode: "", //短信验证码
        createPassword: "", //创建密码
        confirmPassword: "", //确认密码
        email: ""
      },
      ruleCustom: {
        open: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          }
        ],
        dynamicCode: [
          {
            required: true,
            message: "短信验证不能为空",
            trigger: "blur"
          }
        ],
        createPassword: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    goregister() {
      let Obj = {};
      Obj.username = this.formCustom.open;
      Obj.password = this.formCustom.createPassword = this.formCustom.confirmPassword;
      Obj.email = this.formCustom.email;
      console.log(Obj);
      this.$axios
        .post(`/users/register`, Obj)
        .then(res => {
          if (res.data.code === 500) {
            this.$Message.error("用户名或密码错误");
          } else if (res.data.code === 200) {
            this.$Message.success ("This is a success tip");
            this.$router.push("/");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    tologin() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ivu-form-item-error-tip {
  position: absolute;
  top: 100%;
  left: 19%;
  line-height: 1;
  padding-top: 6px;
  color: #ed4014;
}
.logins_head {
  height: 61px;
  line-height: 61px;
  border-bottom: 2px solid#cdcdcd;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  // width: 80%;
  // margin:  0 auto;
}
.log_tp {
  height: 40px;
  position: relative;
  top: 18%;
  left: 0;
  width: 134px;
}
.log_tp img {
  width: 100%;
  height: 100%;
}
.log_tp_rig {
  display: flex;
}
._rig_tx1 {
  width: 155px;
  text-align: center;
  font-size: 16px;
}
._rig_tx2 {
  line-height: 25px;
  position: relative;
  top: 31%;
  text-align: center;
  width: 49px;
  height: 25px;
  background: #ffc300;
  border-radius: 3%;
}
.open {
  height: 50px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  line-height: 50px;
}
.open_number {
  width: 100px;
  text-align: right;
  font-size: 15px;
  height: 36px;
}
.open_inpu {
  width: 25%;
  margin-left: 2%;
}
.end_all {
  margin-top: 3%;
  border-bottom: 1px solid #cdcdcd;
}
.end_all_ {
  width: 30%;
  margin-left: 5%;
}

.open_inpu input {
  width: 100%;
  height: 36px;
}
.open_righ {
  margin-left: 1%;
  font-size: 12px;
  color: #cdcdcd;
}
.code {
  width: 80%;
  height: 28px;
  margin: 0 auto;
}
.code_tx {
  background: #cdcdcd;
  width: 120px;
  text-align: center;
  line-height: 28px;
  margin-left: 11%;
}
.masg {
  width: 80%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  line-height: 50px;
}
.masg_left {
  height: 36px;
  text-align: right;
  width: 100px;
  line-height: 50px;
  font-size: 15px;
}
.masg_inpu {
  width: 25%;
  margin-left: 2%;
}
.intension {
  width: 80%;
  margin: 0 auto;
}
.intension_all {
  display: flex;
  width: 25%;
  margin-left: 11%;
}
.intension_all_tx {
  width: 30%;
  margin: 2%;
  text-align: center;
  background: #f7f8fa;
  color: white;
}
.masg_inpu input {
  width: 100%;
  height: 36px;
}
.ends_warp {
  width: 80%;
  margin: 0 auto;
}
.ends {
  height: 33px;
  line-height: 40px;
  width: 200px;
  text-align: center;
  font-size: 15px;
  margin-left: 11%;
  background: #ffc300;
}
.ends_ {
  width: 340px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ffc300;
  font-size: 14px;
  margin-left: 11%;
}
.endes {
  color: #cdcdcd;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 2%;
}
</style>