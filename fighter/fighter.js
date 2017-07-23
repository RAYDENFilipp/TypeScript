"use strict";
exports.__esModule = true;
var Fighter = (function () {
    function Fighter(name, power, health) {
        if (name === void 0) { name = 'Scorpio'; }
        if (power === void 0) { power = 1; }
        if (health === void 0) { health = 15; }
        this.name = name;
        this.power = power;
        this.health = health;
    }
    Fighter.prototype.setDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            console.log(this.name + " health: " + this.health);
        }
        else {
            this.health = 0;
            console.log(this.name + " is dead");
        }
    };
    Fighter.prototype.hit = function (enemy, point) {
        var damage = this.power * point;
        enemy.setDamage(damage);
    };
    return Fighter;
}());
exports.Fighter = Fighter;
