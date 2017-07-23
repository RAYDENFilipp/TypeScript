/*jshint esversion: 6*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ImprovedFighter = (function (_super) {
    __extends(ImprovedFighter, _super);
    function ImprovedFighter(name, power, health) {
        if (name === void 0) { name = 'Raiden'; }
        if (power === void 0) { power = 1; }
        if (health === void 0) { health = 8; }
        return _super.call(this, name, power, health) || this;
    }
    ImprovedFighter.prototype.doubleHit = function (enemy, point) {
        point *= 2;
        _super.prototype.hit.call(this, enemy, point);
    };
    return ImprovedFighter;
}(Fighter));
var fighter = new Fighter();
var improvedFighter = new ImprovedFighter();
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
fight(fighter, improvedFighter, 2);
