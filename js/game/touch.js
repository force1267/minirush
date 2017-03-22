module.exports = (() => {
    var ngn = require("../engine.js");
    //var hammer = ngn.Hammer(ngn.graphic.cvs, {});
    var tch = {};
    var cvs = ngn.graphic.cvs;
    tch.onTap = { left: (() => {}), right: (() => {}) };

    tch.leftTouch = -1;
    tch.rightTouch = -1;
    cvs.addEventListener('touchstart', function(e) {
        e.preventDefault();
        var mw = document.body.offsetWidth || document.body.clientWidth;
        var ts = e.touches;
        for (var i = 0; i < ts.length; i++) {
            if (ts[i].clientX <= mw / 2 && ts[i].identifier != tch.leftTouch) {
                tch.leftTouch = ts[i].identifier;
                tch.onTap.left(e);
            }
            if (ts[i].clientX > mw / 2 && ts[i].identifier != tch.rightTouch) {
                tch.rightTouch = ts[i].identifier;
                tch.onTap.right(e);
            }
        }

    });
    cvs.addEventListener('touchend', function(e) { e.preventDefault(); });
    cvs.addEventListener('touchmove', function(e) { e.preventDefault(); });
    return tch;
    //exports.onTap.left
    //exports.onTap.right
})();