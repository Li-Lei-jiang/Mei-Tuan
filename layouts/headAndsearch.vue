<template>
  <div>
    <div class="all">
      <div class="warp">
        <div class="head">
          <div class="head_left">
            <div class="head_left_tp">
              <div class="left_tp">
                <img src="../image/dw.png" alt />
              </div>
              <div v-if="city === ''">定位中···</div>
              <div v-else>{{city}}</div>
            </div>
            <div class="left_cut" @click="changecity">切换城市</div>
            <div class="left_xianc">[ 新津县 崇州 彭州 ]</div>
            <div class="left_now" @click="tologin">立即登录</div>
            <div>注册</div>
          </div>
          <div class="head_rig">
            <div class="_rig_item">
              <div class="items">我的美团</div>
              <div class="_rig_min_all">
                <div>我的订单</div>
                <div>我的收藏</div>
                <div>抵用券</div>
                <div>账户设置</div>
              </div>
            </div>
            <div class="_rig_items">手机App</div>
            <div class="_rig_item">
              <div class="items">商家中心</div>
              <div class="_rig_min_all merchantCA">
                <div>美团餐饮商户中心</div>
                <div>登录商家中心</div>
                <div>美团智能收银</div>
                <div>我想合作</div>
                <div>手机免费开店</div>
                <div>餐饮代理商招募</div>
                <div>商家申请开票</div>
                <div>免费合作美团排队</div>
              </div>
            </div>
            <div class="_rig_item">
              <div class="items">美团规则</div>
              <div class="_rig_min_all">
                <div>规则中心</div>
                <div>规则目录</div>
                <div>规则评议院</div>
              </div>
            </div>
            <div class="_rig_item">网站导航</div>
          </div>
        </div>
      </div>
    </div>
    <div class="alls">
      <div class="warps">
        <div class="logo">
          <div class="logo_lift">
            <div class="logo_tp">
              <img src="../image/logo.png" alt />
            </div>
          </div>
          <div class="logo_rig">
            <div class="seach_all">
              <div class="_all_input">
                <input
                  type="text"
                  placeholder="搜索商家或地点"
                  @focus="focus"
                  @blur="show"
                  @input="inputVal"
                />
              </div>
              <div class="seach_all_rig">
                <div class="seach_tp" @click="GoogleSuggest">
                  <img src="../image/sous.png" alt />
                </div>
              </div>
            </div>
            <div v-if="flag=== true" class="searchSuggestion">
              <div v-for="(item,index) in searchData" :key="index" class="searchSuggestion_item" @click="getsearchDataVal(item.name)">
                <div>{{item.name}}</div>
              </div>
            </div>
            <div class="seach_bottom">
              <div v-for="(item,index) in hot" :key="index" class="bottom_item">
                <div>{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "", //城市名
      
      flag: false,
      searchData: [],//建议结果
      searchTime: "",//定时器名
      // searchDataVal:'',//搜索建议结果中的词
    };
  },
  components: {},
  methods: {
    //获得焦点
    focus(e) { 
      this.flag = true;
      // console.log(this.flag);
    },
    //失去焦点
    show() {
       setTimeout(()=>{
          this.flag = false;
       },1000)
     
    },
    //去登录页
    tologin(){
      this.$router.push ("/login")
    },
    //切换城市
    changecity(){
        this.$router.push("/changecity")
    },
    //获得 想要的搜索建议值
    getsearchDataVal(name){
      let searchDataVal = name;
      this.$router.push({path:'/merchantDetails',query:{name:searchDataVal}})
      // console.log(searchDataVal)
    },
    //搜索建议获取
    inputVal(e) {
      clearTimeout(this.searchTime);
      this.searchTime = setTimeout(() => {
        let city = this.$store.state.city.slice(0, 2);
        let input = e.data;
        this.$axios
          .get(`/searchTop?city=${city}&input=${input}`)
          .then(res => {
            this.searchData = res.data.data.top;
            // console.log(this.searchData);
          })
          .catch(err => {
            console.log(err);
          });
      }, 1000);
    },

    GoogleSuggest() {
      
    }
  },

  mounted() {
    this.city = this.$store.state.city;
  },
  watch: {},
  computed: {
    hot() {
      return this.$store.state.hot;
    }
  }
};
</script>

<style scoped lang='scss'>
// 头部
.all {
  background: #f8f8f8;
}
.warp {
  max-width: 1300px;
  min-width: 960px;
  margin: 0 auto;
  width: 1191px;
  height: 50px;
}
@media (max-width: 960px) {
  .warp {
    width: 60px;
    height: 50px;
    margin: 0 auto;
  }
  // .seach_all{
  //   width: 420px;
  //   display: flex;
  //   height: 40px;
  //   margin-top: 6%;
  // }
  // .seach_bottom{
  //   // display: flex;
  //   display: none;
  // }
}
.head {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.head_left {
  display: flex;
}
.head_rig {
  display: flex;
}
.head_left_tp {
  display: flex;
  width: 70px;
}
.left_tp {
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
  left: 0;
}
.left_tp img {
  width: 100%;
  height: 100%;
}
.left_cut {
  width: 55px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #cdcdcd;
  margin-top: 5%;
}
.left_xianc {
  width: 120px;
  text-align: center;
}
.left_now {
  color: #f2b900;
  width: 60px;
  text-align: center;
}
._rig_item {
  width: 90px;
  text-align: center;
  position: relative;
}
._rig_items {
  width: 90px;
  text-align: center;
}
._rig_items:hover {
  color: #f2b900;
}
._rig_item:hover {
  .items {
    color: #f2b900;
  }
  background: white;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  ._rig_min_all {
    display: block;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    background: white;
    div:hover {
      color: #f2b900;
    }
  }
}

._rig_min_all {
  width: 90px;
  line-height: 30px;
  position: absolute;
  top: 49px;
  text-align: center;
  left: -1px;
  display: none;
}
.merchantCA {
  width: 150px;
  position: absolute;
  top: 49px;
  text-align: center;
  left: -61px;
}
// 搜索
.alls {
  background: white;
  height: 157px;
}
.warps {
  max-width: 1300px;
  min-width: 960px;
  height: 157px;
  width: 1191px;
  margin: 0 auto;
}

.logo {
  height: 122px;
  width: 100%;
  display: flex;
}
.logo_lift {
  width: 22%;
}
.logo_tp {
  width: 126px;
  height: 44px;
  position: relative;
  top: 30%;
  left: 0;
}
.logo_tp img {
  width: 100%;
  height: 100%;
}
.logo_rig {
  width: 49%;
  height: 122px;
  margin-left: 3%;
  position: relative;
}
.searchSuggestion{
  position: absolute;
  top: 78px;
  left: 0;
  background: white;
  z-index: 100;
  width: 80%;
}
.searchSuggestion_item{
  height: 30px;
  line-height: 30px;
  padding-left: 3%;
}
.searchSuggestion_item:hover{
  color: #f2b900;
}
.seach_all {
  display: flex;
  height: 40px;
  margin-top: 6%;
}
.seach_tp {
  width: 25px;
  height: 25px;
  margin: 7px auto;
}
.seach_tp img {
  width: 100%;
  height: 100%;
}
._all_input {
  width: 80%;
  border: 1px solid #f0f0f0;
  border-radius: 2% 0 0 2%;
}
._all_input input {
  width: 100%;
  height: 38px;
  padding-left: 3%;
  border: 0;
}
.seach_all_rig {
  width: 19%;
  height: 40px;
  background: #ffbd08;
  border-radius: 0 3% 3% 0;
}
.seach_bottom {
  display: flex;
}
.bottom_item {
  width: 100%;
  text-align: center;
  height: 30px;
  color: #cdcdcd;
  line-height: 30px;
}
.bottom_item:hover {
  color: #ffbd08;
}

</style>