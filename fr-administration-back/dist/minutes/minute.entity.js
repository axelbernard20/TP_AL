"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minute = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const association_entity_1 = require("../associations/association.entity");
let Minute = class Minute {
};
exports.Minute = Minute;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Minute.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Minute.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Minute.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Minute.prototype, "voters", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => association_entity_1.Association),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", association_entity_1.Association)
], Minute.prototype, "association", void 0);
exports.Minute = Minute = __decorate([
    (0, typeorm_1.Entity)()
], Minute);
//# sourceMappingURL=minute.entity.js.map