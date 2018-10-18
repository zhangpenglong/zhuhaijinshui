var e = require("./util"), s = require("./constants"), n = require("./session"), i = require("../config"), o = function() {
    function e(e, s) {
        Error.call(this, s), this.type = e, this.message = s;
    }
    return e.prototype = new Error(), e.prototype.constructor = e, e;
}(), r = function(e) {
    wx.login({
        success: function(s) {
            e(null, {
                code: s.code,
                encryptedData: "",
                iv: "",
                userInfo: {
                    avatarUrl: i.host + "Public/template/headImgUrl.jpg",
                    nickName: "匿名用户"
                }
            });
        },
        fail: function(n) {
            var i = new o(s.ERR_WX_LOGIN_FAILED, "微信登录失败，请检查网络状态");
            i.detail = n, e(i, null);
        }
    });
}, t = function() {}, a = {
    method: "GET",
    success: t,
    fail: t,
    loginUrl: i.service.loginUrl,
    data: {}
};

module.exports = {
    LoginError: o,
    login: function(i) {
        if (i = e.extend({}, a, i), a.loginUrl) {
            var t = function() {
                return r(function(e, r) {
                    if (e) i.fail(e); else {
                        var t = r.userInfo, a = r.code, c = r.encryptedData, l = r.iv, u = {};
                        i.data.code = a, i.data.iv = l, i.data.data = c, wx.request({
                            url: i.loginUrl,
                            header: u,
                            method: i.method,
                            data: i.data,
                            success: function(e) {
                                var r = e.data;
                                if (r.session = {}, r && 0 == r.errcode) if (r.session_id) r.session.userInfo = t, 
                                r.session.session_id = r.session_id, r.session.wxid = r.wxid, n.set(r.session), 
                                i.success(t); else {
                                    var a = "登录失败(" + r.error + ")：" + (r.message || "未知错误"), c = new o(s.ERR_LOGIN_SESSION_NOT_RECEIVED, a);
                                    i.fail(c);
                                } else {
                                    var a = "登录请求没有包含会话响应，请确保服务器处理 `" + i.loginUrl + "` 的时候正确使用了 SDK 输出登录结果", c = new o(s.ERR_LOGIN_SESSION_NOT_RECEIVED, a);
                                    i.fail(c);
                                }
                            },
                            fail: function(e) {
                                var n = new o(s.ERR_LOGIN_FAILED, "登录失败，可能是网络错误或者服务器发生异常");
                                i.fail(n);
                            }
                        });
                    }
                });
            }, c = n.get();
            c ? wx.checkSession({
                success: function() {
                    i.success(c.userInfo);
                },
                fail: function() {
                    n.clear(), t();
                }
            }) : t();
        } else i.fail(new o(s.ERR_INVALID_PARAMS, "登录错误：缺少登录地址，请通过 setLoginUrl() 方法设置登录地址"));
    },
    setLoginUrl: function(e) {
        a.loginUrl = e;
    }
};