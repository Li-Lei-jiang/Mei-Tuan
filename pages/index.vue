<template>
  <div class="total">
    <div class="warp">
       <dir class="omnirange">
          <dir v-for="(item,index) in list" :key="index" class="list_item">
            <div>{{item}}</div>
          </dir>
        </dir>
      <div class="center_left">
        <div class="_left_tit">全部分类</div>
        <div class="_tit_all">
          <div v-for="(item,index) in menu" :key="index" class="menu_item">
            <div class="_item_txt">
              <div class="_item_left">
                <i
                  class="iconfont icons"
                  :class="icons[index].icon"
                  v-bind:style="{color:icons[index].color}"
                ></i>
                <div class="_item_name">{{item.name}}</div>
                <div class="_item_fh">></div>
                <div class="menu_item_extend">
                  <div v-for="(item1,index1) in item.child" :key="index1">
                    <div class="_item_extend_head">
                      <div class="_extend_head_tit">{{item1.title}}</div>
                      <div class="_extend_head_rig">更多 ></div>
                    </div>
                    <div class="_item_extend_end">
                      <div
                        v-for="(item2,index2) in item1.child"
                        :key="index2"
                        class="_extend_end_item"
                      >
                        <div>{{item2}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边板块 -->
      <div class="center_cent">
        <div class="_cent_head">
          <div class="_head_lbt">
            <Carousel
              :autoplay="setting.autoplay"
              :autoplay-speed="setting.autoplaySpeed"
              :dots="setting.dots"
              :radius-dot="setting.radiusDot"
              :trigger="setting.trigger"
              :arrow="setting.arrow"            
              style="height:240px"
              >
              <div class="_lbt_alls">
                <div v-for="(item,index) in banner" :key="index" class="_lbt_item">
                  <CarouselItem>
                    <div class="cl_lbt_item_tp">
                      <img :src="item.img" />
                    </div>
                  </CarouselItem>
                </div>
              </div>
            </Carousel>
          </div>
          <div class="_head_xxsh">
            <img src="../image/xxsh.jpg" alt />
          </div>
          <div class="_head_dl">
            <div class="_dl_tp">
              <img src="../image/avatar.jpg" alt />
            </div>
            <div class="_dl_nh">Hi ! 你好</div>
            <div class="_dl_zhuc" @click="tosignIn">注册</div>
            <div class="_dl_login" @click="tologin">登录</div>
          </div>
          <div class="_head_zjd">
            <img src="../image/zjd.png" alt />
          </div>
          <div class="_head_zzs">
            <img src="../image/zzs.jpg" alt />
          </div>
          <div class="_head_wssj">
            <img src="../image/wssj.jpg" alt />
          </div>
          <div class="_head_ewm">
            <div class="_ewm_ewm">
              <img src="../image/ewm.png" alt />
            </div>
            <div class="_ewm_txt">美团APP手机版</div>
            <div class="_ewm_end">
              <span class="red">1元起</span>
              <span class="gary">吃喝玩乐</span>
            </div>
          </div>
        </div>
      </div>   
    </div>
    <homeCenter></homeCenter>
  </div>
</template>

<script>
import homeCenter from "../components/homeCenter/homeCenter"
export default {
  layout: "headAndsearch",
  data() {
    return {
      city: "", //城市名
      hot: [], //热门搜索
      menu: [], //全部分类
      banner: [], //轮播图
      icons: [
        { icon: "iconfood", color: "#ff8200" },
        { icon: "iconwaimai", color: "#ffb500" },
        { icon: "iconHotel", color: "#9B5E3E" },
        { icon: "iconzhenguo", color: "#ffb500" },
        { icon: "iconArtboard", color: "#ff3d00" },
        { icon: "iconjiaotong-lunchuan", color: "#03A9F4" },
        { icon: "iconktv", color: "#00BF96" },
        { icon: "iconlife", color: "#00BF96" },
        { icon: "iconliren", color: "#FF4081" },
        { icon: "iconmarried", color: "#FF4081" },
        { icon: "iconchild", color: "#FF4081" },
        { icon: "iconsport", color: "#03A9F4" },
        { icon: "icondecorate", color: "#00BF96" },
        { icon: "iconeducation", color: "#00BF96" },
        { icon: "iconmedical", color: "#03A9F4" },
        { icon: "iconbar", color: "#00BF96" }
      ], //全部分类图标
      list: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿／公寓",
        "商家入驻",
        "美团公益"
      ],
      setting: {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "hover"
      }
    };
  },
  components: {
    homeCenter
  },
  methods: {
    getHot() {
      let city = this.city.substring(0, 2);
      // console.log(city)
      this.$axios
        .get(`/hotPlace?city=${city}`)
        .then(res => {
          this.hot = res.data.data.result.slice(0, 5);
          if (this.hot !== "") {
            this.$store.state.hot = this.hot;
          }
          // console.log(this.$store.state.hot,22)
        })
        .catch(err => {
          console.log(err);
        });
    },
    //注册
    tosignIn(){
      this.$router.push('/logins')
    },
    //登录
    tologin(){
      this.$router.push('/login')
    },
  },
  async asyncData(ctx) {
    // console.log(ctx.data.city)
    let [res1, res2, res3,res4] = await Promise.all([
      ctx.$axios.get("/position"),
      ctx.$axios.get("/menu"),
      ctx.$axios.get("/banner")
    ]);
    ctx.store.state.city = res1.data.data.city;
    console.log(res3.data.data);
    return {
      city: res1.data.data.city,
      menu: res2.data.data.menu,
      banner: res3.data.data
    };
  },
  mounted() {
    if (this.city !== "") {
      this.$store.state.city = this.city;
      this.getHot();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

.total {
  background: #f8f8f8;
  margin-top: 1%;
}
.warp {
  max-width: 1300px;
  min-width: 960px;
  width: 1190px;
  margin: 0 auto;
  display: flex;
  position:relative;
}
//搜素下的导航
.omnirange {
 display: flex;
    width: 56%;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    padding-left: 0;
    position: absolute;
    z-index: 10;
    top: -12%;
    left: 20%;
}
.list_item {
  width: 130px;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  padding-left: 0;
}
.center_left {
  width: 19%;
  height: 475px;
  background: white;
  border: 1px solid #cdcdcd;
  position: relative;
  top: -50px;
  left: 0;
}
._tit_all {
  margin-top: 4%;
}
._left_tit {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5%;
}
.menu_item {
  height: 26px;
  line-height: 26px;
  font-size: 13px;
}
.menu_item div:hover {
  font-weight: bold;
  background: #fff7eb;
}
._item_txt {
  display: flex;
  justify-content: space-between;
}
._item_left {
  display: flex;
  width: 100%;
  padding-left: 5%;
}
._item_name {
  margin-left: 5%;
}
._item_fh {
  position: absolute;
  right: 10px;
}

// 分类扩展
._item_left:hover {
  .menu_item_extend {
    display: block;
    ._item_extend_end div:hover {
      color: #fac700;
    }
  }
}

.menu_item_extend {
  width: 190%;
  height: 470px;
  background: white;
  // border:
  position: absolute;
  top: 61px;
  left: 225px;
  display: none;
  z-index: 1000;
}
._item_extend_head {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #cdcdcd;
  line-height: 50px;
  height: 50px;
  // margin-top: 2%;
}
._item_extend_end {
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
}
._extend_head_tit {
  font-size: 18px;
  font-weight: normal;
}
._extend_head_rig {
  font-weight: normal;
  color: #cdcdcd;
  font-size: 13px;
}
._extend_end_item {
  margin-right: 7%;
  font-size: 12px;
  color: #aeaeae;
}

// 右边轮播图和登录板块
.center_cent {
  height: 417px;
  width: 950px;
  // background: green;
  margin-left: 1%;
  margin-top: 1%;
  position: relative;
}
._cent_head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 270px;
}
._cent_head > div {
  margin-bottom: 9px;
}

._head_lbt {
  width: 550px;
  height: 240px;
  // display: flex;
  // background: #aeaeae;
}
._head_lbt img {
  width: 100%;
  height: 100%;
}
._head_xxsh {
  width: 150px;
  height: 240px;
  // background: #aae;
}
._head_xxsh img {
  width: 100%;
  height: 100%;
}
._head_dl {
  width: 228px;
  height: 240px;
  background: white;
}
._head_dl img {
  width: 100%;
  height: 100%;
}
._head_zjd {
  width: 270px;
  height: 165px;
  // background: #95ac15;
}
._head_zjd img {
  width: 100%;
  height: 100%;
}
._head_zzs {
  width: 269px;
  height: 165px;
  // background: #741642;
}
._head_zzs img {
  width: 100%;
  height: 100%;
}
._head_wssj {
  width: 150px;
  height: 165px;
  // background: #1f8a48;
}
._head_wssj img {
  width: 100%;
  height: 100%;
}
._head_ewm {
  width: 228px;
  height: 167px;
  background: white;
}
._head_ewm img {
  width: 100%;
  height: 100%;
}
._dl_tp {
  height: 59px;
  text-align: center;
  margin-top: 32px;
}
._dl_tp img {
  width: 55px;
  height: 55px;
}
._dl_nh {
  width: 96px;
  height: 21px;
  margin: 0 auto;
  text-align: center;
}
._dl_zhuc {
  width: 118px;
  text-align: center;
  margin: 10px auto 15px auto;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 40px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.5s;
  display: block;
  line-height: 38px;
}
._dl_login {
  width: 118px;
  text-align: center;
  margin: 10px auto 15px auto;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 40px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.5s;
  display: block;
  line-height: 38px;
}
._ewm_ewm {
  margin: 10px auto 0 auto;
  text-align: center;
}
._ewm_ewm img {
  height: 95px;
  width: 95px;
}
._ewm_txt {
  height: 21px;
  text-align: center;
}
._ewm_end {
  height: 16px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
}
.red {
  color: red;
}
._lbt_item {
  height: 240px;
  width: 550px;
  display: flex;
}
._lbt_alls {
  display: flex;
}
.cl_lbt_item_tp {
  width: 550px;
  height: 240px;
}
.cl_lbt_item_tp img {
  width: 100%;
  height: 100%;
}
</style>