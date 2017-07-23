"use strict";
exports.__esModule = true;
function fight(fighter1, fighter2) {
    var point = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        point[_i - 2] = arguments[_i];
    }
    var point_acumulated = point.reduce(function (firstVal, secondVal) {
        return firstVal + secondVal;
    });
    while (true) {
        if (fighter1.health > 0) {
            fighter1.hit(fighter2, point_acumulated);
        }
        if (fighter2.health > 0) {
            fighter2.doubleHit(fighter1, point_acumulated);
        }
        if (fighter1.health === 0) {
            console.log(fighter2.name + " wins!");
            break;
        }
        if (fighter2.health === 0) {
            console.log(fighter1.name + " wins!");
            break;
        }
    }
}
exports.fight = fight;
