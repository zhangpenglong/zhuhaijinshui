var t = getApp(), e = require("../../config"), i = require("../../utils/util.js");

Page(i.extend({}, {
    data: {
        imgPre: e.imgPre,
      pic: [],
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