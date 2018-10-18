var t = getApp();

require("../../config.js");

Page({
    data: {
        configDatas: null,
        articleList: null
    },
    onShow: function() {
        var a = this;
        this.setData({
            configDatas: t.globalData.configDatas
        }), t.getServerInfo("WeApp/Template3/getArticleList", {}, function(t) {
            a.setData({
                articleList: t.data.article
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
});