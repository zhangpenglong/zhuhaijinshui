var t = getApp(), e = require("../../config"), a = require("../../utils/util.js");

Page(a.extend({}, {
    data: {
        configDatas: null,
        caseList: null,
        imgPre: e.imgPre
    },
    onShow: function() {
        var e = this;
        this.setData({
            configDatas: t.globalData.configDatas
        }), t.getServerInfo("WeApp/Template3/getCaseList", {}, function(t) {
            e.setData({
                caseList: t.data.case
            });
        });
    },
    onShareAppMessage: function() {
        return {};
    },
    onLoad: function() {
        t.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(t) {
            wx.setNavigationBarTitle({
                title: t.data.title
            });
        });
    }
}));