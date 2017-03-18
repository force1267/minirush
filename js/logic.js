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