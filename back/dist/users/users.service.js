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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    constructor(userRepository, rolesService) {
        this.userRepository = userRepository;
        this.rolesService = rolesService;
    }
    async create(lastname, firstname, age, password) {
        const saltRounds = 10;
        if (password === undefined) {
            password = "0000";
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = this.userRepository.create({ firstname: firstname, lastname: lastname, age: age, password: hashedPassword });
        await this.userRepository.save(user);
        return user;
    }
    async getAll() {
        return this.userRepository.find();
    }
    async getById(idToFind) {
        return this.userRepository.findOne({ where: { id: (0, typeorm_2.Equal)(idToFind) } });
    }
    async update(id, updateData) {
        const user = await this.getById(id);
        if (updateData.password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(updateData.password, saltRounds);
            updateData.password = hashedPassword;
        }
        Object.assign(user, updateData);
        await this.userRepository.save(user);
        return user;
    }
    async delete(id) {
        await this.userRepository.delete(id);
    }
    async getRolesByUserId(userId) {
        const roles = await this.rolesService.findRolesByUserId(userId);
        return roles;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => roles_service_1.RolesService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService])
], UsersService);
//# sourceMappingURL=users.service.js.map