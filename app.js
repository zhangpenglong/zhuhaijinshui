var i = require("./config"), o = require("./utils/util.js"), t = require("./utils/login"), n = require("./utils/session"), e = require("./utils/request");

App({
    onLaunch: function(i) {
        var t = this, n = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        o.isEmpty(n) || (this.globalData.extConfig = n), wx.getSystemInfo({
            success: function(i) {
                var o = 240 * i.windowWidth / 411;
                t.globalData.slidePicHeight = o;
            }
        });
    },
    getUserInfo: function(i) {
        var o = this;
        return new Promise(function(n, e) {
            var u = o;
            o.globalData.userInfo ? ("function" == typeof i && i(o.globalData.userInfo), n(n)) : t.login({
                success: function(o) {
                    u.globalData.userInfo = o, "function" == typeof i && i(u.globalData.userInfo), n(n);
                },
                fail: function(i) {
                    console.log(i);
                }
            });
        });
    },
    onShow: function(i) {
       // this.getUserInfo();
    },
    getServerInfo: function(o, t, n) {
        var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "get";
        e.request({
            url: i.host + o,
            data: t,
            method: u,
            success: function(i) {
                n(i);
            }
        });
    },
    session: function(i) {
        var o = n.get();
        return o && i ? o[i] : o;
    },
    jumpThing: function(i) {
        var o = i.currentTarget.dataset.jumptype, t = i.currentTarget.dataset.jumpid;
        switch (o) {
          case "1":
            wx.navigateTo({
                url: "/pages/article/content?id=" + t
            });
            break;

          case "2":
            return;

          case "3":
            wx.navigateTo({
                url: "/pages/form_coupon/content?id=" + t
            });
            break;

          case "4":
            wx.navigateTo({
                url: "/pages/case/content?id=" + t
            });
            break;

          case "5":
            wx.navigateToMiniProgram({
                appId: "" + t,
                fail: function(i) {
                    console.log("跳转小程序失败"), console.log(i);
                }
            });
            break;

          case "formPage":
            wx.navigateTo({
                url: "/pages/form/form"
            });
            break;

          default:
            return;
        }
    },
    globalData: {
        slidePicHeight: 0,
        userInfo: null,
        lawyer: null,
        wxid: null,
        extConfig: null,
        configDatas: {
            functionConfig: [ {
                txt: "窗帘",
                pic: "chuanglian.png"
            }, {
                txt: "装修案例",
                pic: "zhuangxiuanli.png"
            }, {
                txt: "设计团队",
                pic: "shejituandui.png"
            }, {
                txt: "关于我们",
                pic: "guanyuwomen.png"
            }, {
                txt: "联系我们",
                pic: "dianhua.png"
              }, {
                txt: "合作伙伴",
                pic: "hezuo.jpg"
              }, {
                txt: "新房装修",
                pic: "xinfang.jpg"
              }, {
                txt: "优惠活动",
                pic: "youhui.jpg"
              }],
            picConfig: [ {
                pic: "shop/201711/10/o_1bui821pj4ff1q5emkl16v31elv1g.png",
                jumpType: "0",
                jumpTxt: "",
                jumpId: ""
            }, {
                pic: "shop/201711/10/o_1bui9usei17sc16ma1b831g3r1htr1g.png",
                jumpType: "0",
                jumpTxt: "",
                jumpId: ""
            }, {
                pic: "shop/201711/10/o_1bui827vc1tbn10dg10uncs16231q.png",
                jumpType: "0",
                jumpTxt: "",
                jumpId: ""
            }, {
                pic: "shop/201711/10/o_1bui82am914j617evjfhh47qqu1v.png",
                jumpType: "0",
                jumpTxt: "",
                jumpId: ""
            } ],
            backgroundPic: "shop/201711/10/o_1bui9v3qj1d43eh654u18rqe7n1l.png"
        }
    }
});