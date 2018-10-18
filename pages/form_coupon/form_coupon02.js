getApp(), require("../../config");

var t = require("../../utils/util.js"), e = require("../../utils/default");

Page(t.extend({}, e, {
    data: {
        warnhidden: !0
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
    }
}));