module.exports = (() => {
    var ngn = {};
    var logic = ngn.logic = require("./logic.js");
    var anim = ngn.graphic = require("./graphic.js")(logic.activeObject);
    return ngn;
    //exports.logic
    //exports.graphic
})();