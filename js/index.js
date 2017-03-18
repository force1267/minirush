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