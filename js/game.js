module.exports = (() => {
    //tests :
    n = require("./engine.js");
    l = n.logic;
    a = l.object(1);
    a.speed = 1;
    a.width = a.height = 100;
    g = n.graphic;
    s = g.sprite(a);
    t = require("./game/touch.js");
    t.onTap.left = function(e) {
        a.y += 100;
    }
    t.onTap.right = function(e) {
        a.x += 100;
    }

    l.start();
    g.start();

    return {};
})();