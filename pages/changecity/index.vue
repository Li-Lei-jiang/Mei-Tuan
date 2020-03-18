<template>
  <div class="changecitys">
    <div class="changecity_warp">
      <div class="head_all">
        <div class="head_left">
          <div class="_left_txt">按省份选择：</div>
          <div class="select_one">
            <Select v-model="province_list" style="width:200px" size="large" placeholder="省份">
              <Option v-for="item in province" :value="item" :key="item.id">{{ item }}</Option>
            </Select>
          </div>

          <div class="select_two">
            <Select v-model="model1" style="width:200px" size="large" placeholder="城市">
              <Option
                v-for="item in city_list"
                :value="item"
                :key="item.id"
              >{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div class="head_rig">
          <div class="_rig_txt">直接搜索：</div>
          <div class="select_three">
            <Select v-model="model1" style="width:200px" size="large" placeholder="请输入城市中文或拼音">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
          </div>
        </div>
      </div>
      <div class="hotCity">
        <h3 class="l_arrt">热门城市：</h3>
        <p v-for="(item,index) in HotCity" :key="index" class="r_info">
          <a href="#" class="link_city">{{item.name}}</a>
        </p>
      </div>
      <!-- 最近浏览 -->
      <div class="hotCity">
        <h3 class="l_arrt">最近访问：</h3>
        <p v-for="(item,index) in Recents" :key="index" class="r_info">
          <a href="#" class="link_city">{{item}}</a>
        </p>
      </div>
      <!--按拼音首字母选择  -->
      <div class="capital">
        <h3 class="l_arrt">按拼音首字母选择：</h3>
        <p v-for="(item,index) in letter" :key="index" class="r_info">
          <a :href="'#' + item" class="link_letter">{{item}}</a>
        </p>
      </div>
      <!-- 字母对应城市 -->
      <div>
        <div v-for="(item,index) in letter" :key="index.id" class="city-area">
          <span :id="item" class="city-label">{{item}}</span>
          <span class="cities">
            <span v-for="(item1,index1) in cities[item]" :key="index1" class="link-city">
              <span>{{item1.name}}</span>
            </span>
          </span>
        </div>
      </div>
      <BackTop></BackTop>
    </div>
  </div>
</template>

<script>
import city from "../../assets/lib/city";
// import city_list from "../../assets/lib/city_list";
export default {
  layout: "headAndsearch",
  data() {
    return {
      city_list: [
        "北京市",
        "石家庄市",
        "唐山市",
        "天津市",
        "秦皇岛市",
        "邯郸市",
        "邢台市",
        "保定市",
        "张家口市",
        "承德市",
        "沧州市",
        "廊坊市",
        "衡水市",
        "省直辖县",
        "太原市",
        "大同市",
        "阳泉市",
        "长治市",
        "晋城市",
        "朔州市",
        "晋中市",
        "运城市",
        "忻州市",
        "临汾市",
        "吕梁市",
        "呼和浩特市",
        "包头市",
        "乌海市",
        "赤峰市",
        "通辽市",
        "鄂尔多斯市",
        "呼伦贝尔市",
        "巴彦淖尔市",
        "乌兰察布市",
        "兴安盟",
        "锡林郭勒盟",
        "阿拉善盟",
        "沈阳市",
        "大连市",
        "鞍山市",
        "抚顺市",
        "本溪市",
        "丹东市",
        "锦州市",
        "营口市",
        "阜新市",
        "辽阳市",
        "盘锦市",
        "铁岭市",
        "朝阳市",
        "葫芦岛市",
        "长春市",
        "吉林市",
        "四平市",
        "辽源市",
        "通化市",
        "白山市",
        "松原市",
        "白城市",
        "延边朝鲜族自治州",
        "哈尔滨市",
        "齐齐哈尔市",
        "鸡西市",
        "鹤岗市",
        "双鸭山市",
        "大庆市",
        "伊春市",
        "佳木斯市",
        "七台河市",
        "牡丹江市",
        "黑河市",
        "绥化市",
        "大兴安岭地区",
        "上海市",
        "南京市",
        "无锡市",
        "徐州市",
        "常州市",
        "苏州市",
        "南通市",
        "连云港市",
        "淮安市",
        "盐城市",
        "扬州市",
        "镇江市",
        "泰州市",
        "宿迁市",
        "杭州市",
        "宁波市",
        "温州市",
        "嘉兴市",
        "湖州市",
        "绍兴市",
        "金华市",
        "衢州市",
        "舟山市",
        "台州市",
        "丽水市",
        "合肥市",
        "芜湖市",
        "蚌埠市",
        "淮南市",
        "马鞍山市",
        "淮北市",
        "铜陵市",
        "安庆市",
        "黄山市",
        "滁州市",
        "阜阳市",
        "宿州市",
        "六安市",
        "亳州市",
        "池州市",
        "宣城市",
        "福州市",
        "厦门市",
        "莆田市",
        "三明市",
        "泉州市",
        "漳州市",
        "南平市",
        "龙岩市",
        "宁德市",
        "南昌市",
        "景德镇市",
        "萍乡市",
        "九江市",
        "新余市",
        "鹰潭市",
        "赣州市",
        "吉安市",
        "宜春市",
        "抚州市",
        "上饶市",
        "济南市",
        "青岛市",
        "淄博市",
        "枣庄市",
        "东营市",
        "烟台市",
        "潍坊市",
        "济宁市",
        "泰安市",
        "威海市",
        "日照市",
        "莱芜市",
        "临沂市",
        "德州市",
        "聊城市",
        "滨州市",
        "菏泽市",
        "郑州市",
        "开封市",
        "洛阳市",
        "平顶山市",
        "安阳市",
        "鹤壁市",
        "新乡市",
        "焦作市",
        "濮阳市",
        "许昌市",
        "漯河市",
        "三门峡市",
        "南阳市",
        "商丘市",
        "信阳市",
        "周口市",
        "驻马店市",
        "省直辖县",
        "武汉市",
        "黄石市",
        "十堰市",
        "宜昌市",
        "襄阳市",
        "鄂州市",
        "荆门市",
        "孝感市",
        "荆州市",
        "黄冈市",
        "咸宁市",
        "随州市",
        "恩施土家族苗族自治州",
        "省直辖县",
        "长沙市",
        "株洲市",
        "湘潭市",
        "衡阳市",
        "邵阳市",
        "岳阳市",
        "常德市",
        "张家界市",
        "益阳市",
        "郴州市",
        "永州市",
        "怀化市",
        "娄底市",
        "湘西土家族苗族自治州",
        "广州市",
        "韶关市",
        "深圳市",
        "珠海市",
        "汕头市",
        "佛山市",
        "江门市",
        "湛江市",
        "茂名市",
        "肇庆市",
        "惠州市",
        "梅州市",
        "汕尾市",
        "河源市",
        "阳江市",
        "清远市",
        "东莞市",
        "中山市",
        "潮州市",
        "揭阳市",
        "云浮市",
        "南宁市",
        "柳州市",
        "桂林市",
        "梧州市",
        "北海市",
        "防城港市",
        "钦州市",
        "贵港市",
        "玉林市",
        "百色市",
        "贺州市",
        "河池市",
        "来宾市",
        "崇左市",
        "海口市",
        "三亚市",
        "三沙市",
        "儋州市",
        "省直辖县",
        "重庆市",
        "县",
        "成都市",
        "自贡市",
        "攀枝花市",
        "泸州市",
        "德阳市",
        "绵阳市",
        "广元市",
        "遂宁市",
        "内江市",
        "乐山市",
        "南充市",
        "眉山市",
        "宜宾市",
        "广安市",
        "达州市",
        "雅安市",
        "巴中市",
        "资阳市",
        "阿坝藏族羌族自治州",
        "甘孜藏族自治州",
        "凉山彝族自治州",
        "贵阳市",
        "六盘水市",
        "遵义市",
        "安顺市",
        "毕节市",
        "铜仁市",
        "黔西南布依族苗族自治州",
        "黔东南苗族侗族自治州",
        "黔南布依族苗族自治州",
        "昆明市",
        "曲靖市",
        "玉溪市",
        "保山市",
        "昭通市",
        "丽江市",
        "普洱市",
        "临沧市",
        "楚雄彝族自治州",
        "红河哈尼族彝族自治州",
        "文山壮族苗族自治州",
        "西双版纳傣族自治州",
        "大理白族自治州",
        "德宏傣族景颇族自治州",
        "怒江傈僳族自治州",
        "迪庆藏族自治州",
        "拉萨市",
        "日喀则市",
        "昌都市",
        "林芝市",
        "山南市",
        "那曲市",
        "阿里地区",
        "西安市",
        "铜川市",
        "宝鸡市",
        "咸阳市",
        "渭南市",
        "延安市",
        "汉中市",
        "榆林市",
        "安康市",
        "商洛市",
        "兰州市",
        "嘉峪关市",
        "金昌市",
        "白银市",
        "天水市",
        "武威市",
        "张掖市",
        "平凉市",
        "酒泉市",
        "庆阳市",
        "定西市",
        "陇南市",
        "临夏回族自治州",
        "甘南藏族自治州",
        "西宁市",
        "海东市",
        "海北藏族自治州",
        "黄南藏族自治州",
        "海南藏族自治州",
        "果洛藏族自治州",
        "玉树藏族自治州",
        "海西蒙古族藏族自治州",
        "银川市",
        "石嘴山市",
        "吴忠市",
        "固原市",
        "中卫市",
        "乌鲁木齐市",
        "克拉玛依市",
        "吐鲁番市",
        "哈密市",
        "昌吉回族自治州",
        "博尔塔拉蒙古自治州",
        "巴音郭楞蒙古自治州",
        "阿克苏地区",
        "克孜勒苏柯尔克孜自治州",
        "喀什地区",
        "和田地区",
        "伊犁哈萨克自治州",
        "塔城地区",
        "阿勒泰地区",
        "自治区直辖县级行政区划",
        "台北市",
        "高雄市",
        "台南市",
        "台中市",
        "金门县",
        "南投县",
        "基隆市",
        "新竹市",
        "嘉义市",
        "新北市",
        "宜兰县",
        "新竹县",
        "桃园县",
        "苗栗县",
        "彰化县",
        "嘉义县",
        "云林县",
        "屏东县",
        "台东县",
        "花莲县",
        "澎湖县",
        "连江县",
        "香港岛",
        "九龙",
        "新界",
        "澳门半岛",
        "离岛"
      ],
      Recents: ["成都", "北京"],
      HotCity: [
        {
          id: 1,
          spell: "beijing",
          name: "北京"
        },
        {
          id: 3,
          spell: "shanghai",
          name: "上海"
        },
        {
          id: 47,
          spell: "xian",
          name: "杭州"
        },
        {
          id: 37,
          spell: "shenzhen",
          name: "深圳"
        },
        {
          id: 239,
          spell: "sanya",
          name: "重庆"
        },
        {
          id: 188,
          spell: "lijiang",
          name: "成都"
        },
        {
          id: 125,
          spell: "guilin",
          name: "厦门"
        },
        {
          id: 47,
          spell: "xian",
          name: "西安"
        },
        {
          id: 44,
          spell: "wuhan",
          name: "武汉"
        },
        {
          id: 30,
          spell: "nanjing",
          name: "南京"
        }
      ],
      province_list: "",
      model1: "",
      province: [
        "北京市",
        "天津市",
        "河北省",
        "山西省",
        "内蒙古自治区",
        "辽宁省",
        "吉林省",
        "黑龙江省",
        "上海市",
        "江苏省",
        "浙江省",
        "安徽省",
        "福建省",
        "江西省",
        "山东省",
        "河南省",
        "湖北省",
        "湖南省",
        "广东省",
        "广西壮族自治区",
        "海南省",
        "重庆市",
        "四川省",
        "贵州省",
        "云南省",
        "西藏自治区",
        "陕西省",
        "甘肃省",
        "青海省",
        "宁夏回族自治区",
        "新疆维吾尔自治区",
        "台湾省",
        "香港特别行政区",
        "澳门特别行政区"
      ], //省份
      letter: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      cities: [] //城市
      // province_list: {
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.cities = city.data.cities;
    // this.province = area.province_list;

    // console.log(this.province);
    console.log(area);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
a {
  color: inherit;
}
.changecitys {
  background: rgb(239, 239, 239);
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
}
.changecity_warp {
  // max-width: 1300px;
  // min-width: 960px;
  // width: 1190px;
  // margin: 0 auto;
  // // margin: 20px auto 0;
  // background-color: #fff;
  // border: 1px solid #e5e5e5;
  // border-radius: 4px;
}
.head_all {
  // width: 95%;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 30px;
}
.head_left {
  display: flex;
  height: 34px;
  line-height: 34px;
  font-size: 15px;
}
.head_rig {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
._left_txt {
  font-size: 17px;
}
._rig_txt {
  font-size: 17px;
}
.select_one {
  margin: 0 10px 0 20px;
}
.select_two {
  margin: 0 20px 0 10px;
}
.hotCity {
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
}
.l_arrt {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}
.r_info {
  font-size: 14px;
  vertical-align: top;
  display: inline-block;
  margin-top: 2px;
}
.link_city {
  margin: 0 20px;
  color: #666;
  display: inline-block;
}
.link_letter {
  display: inline-block;
  margin: 0 10px;
  width: 25px;
  height: 25px;
  padding-top: 2px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border-radius: 50%;
}
.capital {
  padding: 30px 0;
}
.city-area {
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  display: flex;
}
.city-label {
  box-sizing: border-box;
  vertical-align: top;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #222222;
  background: #ffd000;
}
.cities {
  display: inline-block;
  max-width: 1065px;
}
.link-city {
  margin: 10px 20px;
  color: #666;
  display: inline-block;
  font-size: 14px;
}
</style>