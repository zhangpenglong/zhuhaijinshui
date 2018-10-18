var a = require("util.js"), t = getApp();

module.exports = {
    data: {
        userInfo: {},
        lawyer: {}
    },
    onLoad: function() {
        var e = this;
        a.isEmpty(t.globalData.lawyer) ? t.getLawyerData(function(a) {
            e.setData({
                lawyer: a
            });
        }) : this.setData({
            lawyer: t.globalData.lawyer
        }), t.getUserInfo(function(a) {
            e.setData({
                userInfo: a
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.lawyer.name,
            desc: t.globalData.lawyer.about
        };
    },
    gotomap: function() {
        t.getServerInfo("Map/api/getMapInfo", {}, function(t) {
            var e = t.data.coords;
            console.log(e);
            var o = e.split(","), n = a.bd_decrypt(o[0], o[1]);
            wx.openLocation({
                latitude: n.gg_lat,
                longitude: n.gg_lon,
                scale: 28,
                name: t.data.name,
                address: t.data.address,
                success: function(a) {},
                fail: function() {},
                complete: function() {}
            });
        });
    }
};