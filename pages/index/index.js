function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = getApp(), i = require("../../utils/util.js"), n = require("../../config.js");

Page(i.extend({}, (t = {
    data: {
        imgPre: n.imgPre,
        host: n.host,
        configDatas: a.globalData.configDatas,
        slidePicHeight: a.globalData.slidePicHeight,
      slidePic: ['lunbo1.png', 'lunbo2.png', 'lunbo3.png',],
      case: ['anli1.jpg', 'anli2.jpg', 'anli3.jpg', 'anli4.jpg',],
        article: null,
        tel: "15916283648",
        pricePopHide: 1,
        priceButtonHide: 1,
      latitude: n.latitude,
      longitude: n.longitude,
      markers: [{
        iconPath: "/images/marker.png",
        id: 0,
        latitude: n.latitude,
        longitude: n.longitude,
        width: 22,
        height: 40
      }],
    },
    mekecall11: function() {
        // wx.makePhoneCall({
        //     phoneNumber: '13405402703',
        //   complete(){
        //     console.log('1111111111111')
        //   }
        // });
        console.log('---------------')
    },
    onShow: function() {
        var e = this;
        // a.getServerInfo("WeApp/Template3/getConfigDatas", {}, function(t) {
        //     var n = t.data.configDatas.config_datas;
        //     i.isEmpty(n) ? e.setData({
        //         configDatas: a.globalData.configDatas
        //     }) : (a.globalData.configDatas = n, n.isShowCalculator && 1 == n.isShowCalculator ? e.setData({
        //         configDatas: n,
        //         priceButtonHide: 0,
        //         pricePopHide: 0
        //     }) : e.setData({
        //         configDatas: n
        //     }));
        // }), a.getServerInfo("WeApp/Template3/getIndexDatas", {}, function(t) {
        //     e.setData({
        //        // slidePic: t.data.slidePic,
        //        // case: t.data.case,
        //         article: t.data.article,
        //         tel: t.data.tel
        //     });
        // }), a.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(e) {
        //     wx.setNavigationBarTitle({
        //         title: e.data.title
        //     });
        // });
    },
    jumpThing: a.jumpThing,
    onShareAppMessage: function() {
        return {};
    }
}, e(t, "mekecall", function() {
   // if ("" == this.data.tel) return !1;
    wx.makePhoneCall({
        phoneNumber: this.data.tel
    });
}), e(t, "onLoad", function() {}), e(t, "pricePopClose", function() {
    this.setData({
        pricePopHide: 1,
        priceButtonHide: 0
    });
}), e(t, "pricePopShow", function() {
    this.setData({
        pricePopHide: 0,
        priceButtonHide: 1
    });
}), t)));