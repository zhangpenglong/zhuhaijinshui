var t = getApp(), e = require("../../config"), i = require("../../utils/util.js");

Page(i.extend({}, {
    data: {
        imgPre: e.imgPre,
      pic: ['chuanglian1.png', 'chuanglian2.png', 'chuanglian3.png', 'chuanglian4.png', 'chuanglian5.png', 'chuanglian6.png', 'chuanglian7.png', 'chuanglian8.png', 'chuanglian9.png', 'chuanglian10.png',],
        title: null
    },
    // onLoad: function(e) {
    //     var i = this;
    //     t.getServerInfo("WeApp/Template3/getCaseContent", {
    //         id: e.id
    //     }, function(t) {
    //         i.setData({
    //             title: t.data.title,
    //             pic: t.data.pic
    //         });
    //     }), t.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(t) {
    //         wx.setNavigationBarTitle({
    //             title: t.data.title
    //         });
    //     });
    // },
    onShareAppMessage: function() {
        return {};
    }
}));