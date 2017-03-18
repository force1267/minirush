(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (() => {
    var ngn = {};
    var logic = ngn.logic = require("./logic.js");
    var anim = ngn.graphic = require("./graphic.js")(logic.activeObject);
    return ngn;
    //exports.logic
    //exports.graphic
})();
},{"./graphic.js":3,"./logic.js":5}],2:[function(require,module,exports){
module.exports = (() => {

})();
},{}],3:[function(require,module,exports){
module.exports = ((objects) => {
    var graphic = {};
    graphic.FPS = 0;
    graphic.objects = objects ? objects : [];
    var cvs = document.getElementById("cvs");
    var ctx = graphic.ctx = cvs.getContext("2d");

    graphic.sprite = ((obj) => {
        var spr = obj.sprite = {};
        spr.object = obj;
        spr.draw = (() => {
            ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
        });
        spr.visible = true;
        return spr;
    });

    var PAUSE = false;
    var loop = (() => {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        for (i in graphic.objects) {
            if (graphic.objects[i])
                if (graphic.objects[i].sprite)
                    if (graphic.objects[i].sprite.visible)
                        graphic.objects[i].sprite.draw();
        }
        if (!PAUSE) {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(loop);
            } else {
                setTimeout(loop, 1000 / graphic.FPS);
            }
        }
    });
    graphic.start = (() => {
        PAUSE = false;
        loop();
    });
    graphic.stop = (() => {
        PAUSE = true;
    });

    return graphic;
    //exports.TPS
    //exports.objects
    //exports.sprite
    //exports.start
    //exports.stop
});
},{}],4:[function(require,module,exports){
var ngn = require("./engine.js");
var game = require("./game.js");
//tests :
n = ngn;
l = n.logic;
a = l.object(1);
a.speed = 1;
a.width = a.height = 10;
g = n.graphic;
s = g.sprite(a);
l.start();
g.start();
},{"./engine.js":1,"./game.js":2}],5:[function(require,module,exports){
module.exports = (() => {
    var logic = {};
    logic.TPS = 128;


    logic.object = ((reg) => {
        var obj = {};
        obj.code = (() => { obj.update(); }); //add this.update() to obj.code for dir-speed based moving
        obj.update = (() => {
            obj.px = obj.x;
            obj.py = obj.y;
            obj.x += obj.speed * Math.cos(obj.dir * Math.PI / 180) / logic.TPS;
            obj.y -= obj.speed * Math.sin(obj.dir * Math.PI / 180) / logic.TPS;
        });
        obj.width =
            obj.height =
            obj.x =
            obj.y =
            obj.px =
            obj.py =
            obj.speed =
            obj.dir = 0;
        obj.logicID = -1;
        obj.active = (() => {
            for (i in activeObject) {
                if (activeObject[i] != undefined) {
                    activeObject[i] = obj;
                    return obj.logicID = i;
                }
            }
            return obj.logicID = activeObject.push(obj) - 1;
        });
        obj.destroy = (() => {
            activeObject[obj.logicID] = undefined;
        });
        if (reg) {
            obj.active();
        }
        return obj;
    });

    var activeObject = logic.activeObject = [];
    var PAUSE = false;
    var loop = (() => {
        for (i in activeObject) {
            if (activeObject[i])
                activeObject[i].code();
        }
        if (!PAUSE) {
            setTimeout(loop, 1000 / logic.TPS);
        }
    });
    logic.start = (() => {
        PAUSE = false;
        loop();
    });
    logic.stop = (() => {
        PAUSE = true;
    });

    return logic;
    //exports.TPS
    //exports.object
    //exports.start
    //exports.stop
})();
},{}]},{},[4]);
