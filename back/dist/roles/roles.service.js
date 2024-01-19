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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roles_entity_1 = require("./roles.entity");
let RolesService = class RolesService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async create(roleInput) {
        const existingRole = await this.roleRepository.findOne({
            where: {
                idUser: roleInput.idUser,
                idAssociation: roleInput.idAssociation
            }
        });
        if (existingRole) {
            return existingRole;
        }
        const newRole = this.roleRepository.create(roleInput);
        await this.roleRepository.save(newRole);
        return newRole;
    }
    async getAll() {
        return this.roleRepository.find();
    }
    async getByIds(idUser, idAssociation) {
        const role = await this.roleRepository.findOne({
            where: {
                idUser: idUser,
                idAssociation: idAssociation
            }
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with User ID ${idUser} and Association ID ${idAssociation} not found`);
        }
        return role;
    }
    async update(idUser, idAssociation, roleUpdate) {
        const role = await this.getByIds(idUser, idAssociation);
        Object.assign(role, roleUpdate);
        return this.roleRepository.save(role);
    }
    async delete(idUser, idAssociation) {
        const result = await this.roleRepository.delete({ idUser, idAssociation });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Role with user ID ${idUser} and association ID ${idAssociation} not found`);
        }
    }
    async findRolesByUserId(userId) {
        const roles = await this.roleRepository.find({
            where: { idUser: userId },
            relations: ['user', 'association']
        });
        if (!roles) {
            throw new common_1.NotFoundException(`No roles found for user with ID ${userId}`);
        }
        return roles;
    }
    async getUsersByRoleName(roleName) {
        const users = await this.roleRepository
            .createQueryBuilder('role')
            .leftJoinAndSelect('role.user', 'user')
            .where('role.name = :roleName', { roleName })
            .select(['user.id', 'user.firstname', 'user.lastname', 'user.age', 'user.password'])
            .getMany();
        return users.map(role => role.user);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(roles_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map