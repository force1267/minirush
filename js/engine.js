module.exports = (() => {
    var ngn = {};
    var logic = ngn.logic = require("./logic.js");
    var anim = ngn.graphic = require("./graphic.js")(logic.activeObject);
    var hammer = ngn.hammer = new(require("./hammer.min.js"))(anim.cvs, {});
    anim.cvs.setAttribute("onselectstart", "return false;");
    anim.cvs.setAttribute("oncontextmenu", "return false;");

    return ngn;
    //exports.logic
    //exports.graphic
    //exports.hammer
})();