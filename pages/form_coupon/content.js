var t = getApp();

Page({
    data: {
        title: "",
        time: "",
        content: "",
        extConfig: t.globalData.extConfig
    },
    onLoad: function(e) {
        var n = e.id, a = this;
        t.getServerInfo("WeApp/Template3/getContentContent", {
            id: n
        }, function(t) {
            a.setData({
                title: t.data.content.title,
                content: t.data.content.content
            });
        });
    },
    onShareAppMessage: function() {
        return {};
    }
});