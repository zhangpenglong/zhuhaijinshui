var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = require("./constants"), r = require("./util"), n = require("./session"), t = require("./login"), i = function() {}, u = function(e) {
    var o = {};
    return e && e.session_id && (o.Cookie = "PHPSESSID=" + e.session_id), o;
}, c = function() {
    function e(e, o) {
        Error.call(this, o), this.type = e, this.message = o;
    }
    return e.prototype = new Error(), e.prototype.constructor = e, e;
}();

module.exports = {
    RequestError: c,
    request: function(l) {
        function s() {
            t.login({
                success: f,
                fail: S
            });
        }
        function f() {
            var e = u(n.get());
            wx.request(r.extend({}, l, {
                header: r.extend({}, v, e),
                success: function(e) {
                    var o = e.data;
                    if (o && o.errcode >= 8) {
                        n.clear();
                        var r, t;
                        if (9 == o.errcode) {
                            if (!q) return q = !0, void s();
                            t = "登录态已过期", r = new c(o.errcode, t);
                        } else t = "鉴权服务器检查登录态发生错误(" + (o.errcode || "OTHER") + ")：" + (o.msg || "未知错误"), 
                        r = new c(o.errcode, t);
                        S(r);
                    } else b.apply(null, arguments);
                },
                fail: S,
                complete: i
            }));
        }
        if ("object" !== (void 0 === l ? "undefined" : e(l))) {
            var a = "请求传参应为 object 类型，但实际传了 " + (void 0 === l ? "undefined" : e(l)) + " 类型";
            throw new c(o.ERR_INVALID_PARAMS, a);
        }
        var p = l.login, d = l.success || i, y = l.fail || i, m = l.complete || i, v = l.header || {}, b = function() {
            d.apply(null, arguments), m.apply(null, arguments);
        }, S = function(e) {
            y.call(null, e), m.call(null, e);
        }, q = !1;
        p ? s() : f();
    }
};