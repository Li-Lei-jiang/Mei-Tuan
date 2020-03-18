<template>
  <div>
    <div class="center_warp">
      <div class="aStyle">
        <div v-for="(item,index) in astyle" :key="index" class="aStyle_items">
          <div v-if="index===0" class="aStyle_title">{{item.name}}</div>
          <div v-else class="aStyle_item" @mouseenter="enter(item,index)">{{item.name}}</div>
        </div>
      </div>
      <div class="show_">
        <div v-for="(item,index) in aStyleData" :key="index">
          <div v-if="item.photos.length >0" class="item_tp">
            <img :src="item.photos[0].url" alt />
          </div>
          <div v-else class="item_tp">
            <img src="../../image/th.jpg" alt />
          </div>
          <div class="item_name">{{item.name}}</div>
          <div class="item_type">{{item.type.slice(0,4)}}</div>
          <div class="item_end_all">
            <div class="item_end">
              <span class="item_shopinfo">￥{{item.shopinfo}}</span>
              <span>元起</span>
            </div>
            <div style="height: 27px;overflow: hidden;margin-bottom: 10px;">{{item.address}}</div>
          </div>
        </div>
      </div>
      <div class="end">
        <div class="end_index">
          <div v-for="(item,index) in UseHelp" :key="index">
            <div class="UseHelp_title">{{item.title}}</div>
            <div v-for="(itemchird,indexchird) in item.arr1" :key="indexchird.id">
              <div>{{itemchird}}</div>
            </div>
          </div>
        </div>
        <div class="end_index">
          <div v-for="(item,index) in Cooperation" :key="index">
            <div class="UseHelp_title">{{item.title}}</div>
            <div v-for="(itemchird,indexchird) in item.arr1" :key="indexchird.id">
              <div>{{itemchird}}</div>
            </div>
          </div>
        </div>
        <div class="end_index">
          <div v-for="(item,index) in league" :key="index">
            <div class="UseHelp_title">{{item.title}}</div>
            <div v-for="(itemchird,indexchird) in item.arr1" :key="indexchird.id">
              <div>{{itemchird}}</div>
            </div>
          </div>
        </div>
        <div class="end_index">
          <div v-for="(item,index) in group" :key="index">
            <div class="UseHelp_title">{{item.title}}</div>
            <div v-for="(itemchird,indexchird) in item.arr1" :key="indexchird.id">
              <div>{{itemchird}}</div>
            </div>
          </div>
        </div>
        <div class="end_index">
          <div v-for="(item,index) in serviceHotline" :key="index">
            <div class="UseHelp_title">{{item.title}}</div>
            <div v-for="(itemchird,indexchird) in item.arr1" :key="indexchird.id">
              <div>{{itemchird}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div>
            <span>©美团网团购 meituan.com</span>
            <span>京ICP证070791号</span>
            <span>京ICP备10211739号</span>
          </div>
          <div>广播电视节目制作经营许可证（京）字第03889号</div>
          <div>
            <span>食品经营许可证</span>
            <span>互联网药品信息服务资格证</span>
          </div>
          <div>医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</div>
        </div>
        <div>
          <div class="bottom_rig">京公网安备11010502025545号</div>
          <div>
            <img src="../../image/tp.png" alt />
          </div>
        </div>
      </div>
      <BackTop></BackTop>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tity: "", //城市
      keyword: "", //关键字
      aStyleData: [], //获取到的有格调的数据
      astyle: [
        { name: "有格调", type: "" },
        { name: "全部", type: "景点" },
        { name: "约会聚餐", type: "美食" },
        { name: "丽人SPA", type: "丽人" },
        { name: "电影演出", type: "电影" },
        { name: "品质出游", type: "旅游" }
      ],
      UseHelp: [
        {
          title: "用户帮助",
          arr1: [
            "美团餐饮商户中心",
            "申请退款",
            "查看美团券密码",
            "常见问题",
            "用户协议",
            "隐私政策",
            " 反诈骗公告",
            "消费者权益保障"
          ]
        },
        {
          title: "美团服务",
          arr1: [
            "美团外卖",
            "美团酒店",
            "猫眼电影",
            "美团配送",
            "美团云",
            "大众点评",
            "美团民宿",
            "无人配送"
          ]
        }
      ],
      Cooperation: [
        {
          title: "商家合作",
          arr1: [
            "美团餐饮商户中心",
            "美团餐饮商户中心",
            "美食商家入驻(非外卖)",
            "美团外卖开店申请",
            "美团收银官网",
            "外卖配送加盟申请",
            "美团点评餐饮学院",
            "酒店商家入驻",
            "境内度假商家入驻",
            "综合商家入驻",
            "美团民宿房东商家入驻",
            "商家开票申请",
            "美团点评智能收银机",
            "美团点评餐饮开放平台",
            "美团点评收单",
            "免费使用美团排队",
            "快驴进货商家合作",
            "美团闪购商家入驻"
          ]
        }
      ],

      league: [
        {
          title: "代理商加盟",
          arr1: [
            "美团外卖代理商招募",
            "到店餐饮代理商招募",
            "非餐饮代理商招募",
            "美团联盟",
            "美团收银招募线上分销商",
            "美团点评5S服务商招募",
            "美团收单渠道代理商招募"
          ]
        },
        {
          title: "美团规则",
          arr1: ["规则中心", "规则目录", "规则评议院"]
        }
      ],
      group: [
        { title: "关注美团", arr1: ["美团新浪微博"] },

        {
          title: "公司信息",
          arr1: [
            "美团新浪微博",
            "关于我们",
            "投资者关系",
            "加入我们",
            "商户诚信公约及管理办法",
            "保险经纪资质"
          ]
        },

        { title: "廉正举报", arr1: ["廉政邮箱"] },

        { title: "知识产权", arr1: ["知识产权维权平台"] }
      ],
      serviceHotline: [
        {
          title: "消费者服务热线",
          arr1: [
            "外卖消费者：10109777",
            "猫眼消费者：10105335",
            "其他消费者：10107888"
          ]
        },
        {
          title: "商家服务热线",
          arr1: [
            "外卖&餐饮商家：10105557",
            "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
          ]
        },
        {
          title: "投诉举报热线",
          arr1: [
            "违法和不良信息举报电话：4006018900",
            "举报邮箱：tousujubao@meituan.com"
          ]
        },

        {
          title: "商家自助入驻美团入口",
          arr1: []
        },
        {
          title: "供应商注册入口",
          arr1: []
        }
      ]
    };
  },
  components: {},
  methods: {
    //获取有格调的显示内容
    getAstyle() {
      this.city = this.$store.state.city;
      this.$axios
        .get(`/results?city=${this.city}&keyword=${this.keyword}`)
        .then(res => {
          //   this.aStyleData = res.data.data.pois;
          let arr = res.data.data.pois; //得到数据
          let sum = 0;
          let array = []; //定义空数组
          //去重 添加进数组
          while (array.length < 6) {
            sum = Math.floor(Math.random() * arr.length); //得到随机的数
            if (array.indexOf(arr[sum]) == -1) {
              array.push(arr[sum]);
            }
          }

          this.aStyleData = array;
        //   console.log(array);

        //   console.log(111111);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //移入事件
    enter(item, index) {
      this.keyword = item.type;
      this.getAstyle();
      console.log(this.keyword);
      //   console.log(item,index)
    }
  },
  mounted() {
    this.getAstyle();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.center_warp {
  max-width: 1300;
  width: 1190px;
  min-width: 960px;
  margin: 0 auto;
}
.aStyle {
  height: 44px;
  background: rgb(193, 171, 131);
  color: white;
  line-height: 44px;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.aStyle_title {
  font-size: 18px;
  margin-left: 13px;
  margin-right: 10px;
}
.aStyle_item {
  height: 44px;
  // width: 100%;
}
.aStyle_items {
  margin-left: 2%;
}
.show_ {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 11px 10px 10px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}

.item_tp {
  width: 368.94px;
  height: 208px;
}
.show_ > div {
  margin-bottom: 10px;
}
.item_tp img {
  width: 100%;
  height: 100%;
}
.item_name {
  font-size: 16px;
  color: #222;
  height: 22px;
  line-height: 22px;
  margin-bottom: 8px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.item_type {
  font-size: 12px;
  color: #999;
  line-height: 18px;
  height: 18px;
  margin-bottom: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item_end {
  height: 27px;
  overflow: hidden;
  margin-bottom: 10px;
}
.item_shopinfo {
  font-size: 22px;
  color: #be9e4d;
  margin-right: 6px;
  letter-spacing: -0.8px;
  cursor: pointer;
}
.item_end_all {
  display: flex;
  justify-content: space-between;
}
.end {
  height: 540px;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.end_index {
  width: 322px;
  // background: #be9e4d;
  margin: 1%;
}
.UseHelp_title {
  font-size: 15px;
  color: #222;
  height: 28px;
  line-height: 28px;
  margin-top: 20%;
}
.UseHelp_item {
  // font-size: 15px;
  color: #666;
  height: 16px;
  line-height: 16px;
}
.bottom {
  height: 120px;
  display: flex;
  justify-content: space-between;
  color: #999;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 30px;
  line-height: 1.6;
}
.bottom_rig {
  text-align: right;
}
.bottom :hover {
  .bottom_rig {
    color: #be9e4d;
  }
  .left {
    color: #be9e4d;
  }
}
</style>