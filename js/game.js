module.exports = ((ngn) => {
    //tests :
    n = ngn;
    l = n.logic;
    a = l.object(1);
    a.speed = 1;
    a.width = a.height = 100;
    g = n.graphic;
    s = g.sprite(a);
    n.hammer.on('tap', function(e) {
        var mw = document.body.offsetWidth || document.body.clientWidth;
        if (e.center.x < mw / 2) {
            a.x -= 100;
        } else {
            a.x += 100;
        }
    });
    l.start();
    g.start();

    return {};
});