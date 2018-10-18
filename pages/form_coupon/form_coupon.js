var t = getApp(), e = require("../../config"), i = require("../../utils/util.js");

Page(i.extend({}, {
    data: {
        title: null,
        imgPre: e.imgPre,
        contentList: null
    },
    onLoad: function(e) {
        // var i = this;
        // this.setData({
        //     title: e.title
        // }), t.getServerInfo("WeApp/Template3/getContentList", {
        //     record_type: e.record_type
        // }, function(t) {
        //     i.setData({
        //         contentList: t.data.contentList
        //     });
        // }), t.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(t) {
        //     wx.setNavigationBarTitle({
        //         title: t.data.title
        //     });
        // });
    },
    onShareAppMessage: function() {
        return {};
    }
}));