module.exports = ((objects) => {
    var graphic = {};
    graphic.FPS = 0;
    graphic.objects = objects ? objects : [];
    var cvs = graphic.cvs = document.getElementById("cvs");
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
    //exports.FPS
    //exports.objects
    //exports.cvs
    //exports.ctx
    //exports.sprite
    //exports.start
    //exports.stop
});