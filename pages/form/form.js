var t = getApp(), e = require("../../config"), i = require("../../utils/util.js");

Page(i.extend({}, {
    data: {
        warnhidden: !0,
        imgPre: e.imgPre,
        configDatas: null,
        submiting: !0
    },
    typeok: function() {
        wx.showToast({
            title: "提交成功",
            duration: 2e3
        });
    },
    typewrong: function() {
        var t = this;
        this.setData({
            warnhidden: !1
        }), setTimeout(function() {
            t.setData({
                warnhidden: !0
            });
        }, 2500);
    },
    onShow: function() {
        this.setData({
            configDatas: t.globalData.configDatas
        });
    },
    formSubmit: function(e) {
        var i = e.detail.value;
        i.mianji && /^\d{7,}$/.test(i.tel) && this.data.submiting ? (this.submiting = !1, 
        wx.showLoading({
            title: "提交中"
        }), t.getServerInfo("WeApp/Template3/freeSurvey", i, function(t) {
            wx.hideLoading(), wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3
            }), setTimeout(function() {
                wx.reLaunch({
                    url: "/pages/index/index"
                });
            }, 1900);
        })) : this.typewrong();
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