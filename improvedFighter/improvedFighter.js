"use strict";
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
exports.__esModule = true;
var fighter_1 = require("../fighter/fighter");
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
}(fighter_1.Fighter));
exports.ImprovedFighter = ImprovedFighter;
