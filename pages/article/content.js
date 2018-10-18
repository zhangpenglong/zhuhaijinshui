var t = getApp();

Page({
    data: {
        title: null,
        time: null,
        content: null
    },
    onLoad: function(e) {
        var n = this;
        t.getServerInfo("WeApp/Template3/getArticleContent", {
            id: e.id
        }, function(t) {
            n.setData({
                title: t.data.title,
                time: t.data.addtime,
                content: t.data.content
            });
        }), t.getServerInfo("WeApp/UniDatas/getAppTitle", {}, function(t) {
            wx.setNavigationBarTitle({
                title: t.data.title
            });
        });
    },
    onShareAppMessage: function() {
        return {};
    }
});