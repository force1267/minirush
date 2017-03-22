module.exports = (() => {
    var ngn = {};
    var logic = ngn.logic = require("./logic.js");
    var anim = ngn.graphic = require("./graphic.js")(logic.activeObject);
    var Hammer = ngn.Hammer = require("./hammer.min.js");


    anim.cvs.setAttribute("onselectstart", "return false;");
    anim.cvs.setAttribute("oncontextmenu", "return false;");

    /*
    dbgO = logic.object(1);
    dbgS = anim.sprite(dbgO);
    dbgS.draw = function() {
        anim.ctx.font = "38 arial";
        for (i in dbgText)
            anim.ctx.fillText(dbgText[i], 100, i * 25 + 25)
    }
    dbgText = [];
    dbg = function(t) {
        return dbgText.push(t) - 1;
    }
    dbg.clear = function() {
        dbgText = [];
    }
*/

    return ngn;
    //exports.logic
    //exports.graphic
    //exports.Hammer
})();