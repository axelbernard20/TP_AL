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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const role_input_1 = require("./role.input");
const role_update_1 = require("./role.update");
const swagger_1 = require("@nestjs/swagger");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async create(roleInput) {
        return this.rolesService.create(roleInput);
    }
    async findAll() {
        return this.rolesService.getAll();
    }
    async findOne(idUser, idAssociation) {
        return this.rolesService.getByIds(idUser, idAssociation);
    }
    async update(idUser, idAssociation, roleUpdate) {
        return this.rolesService.update(idUser, idAssociation, roleUpdate);
    }
    async remove(idUser, idAssociation) {
        return this.rolesService.delete(idUser, idAssociation);
    }
    async getUsersByRoleName(roleName) {
        return this.rolesService.getUsersByRoleName(roleName);
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new role' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'The role has been successfully created.' }),
    (0, swagger_1.ApiBody)({ type: role_input_1.RoleInput }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_input_1.RoleInput]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles' }),
    (0, swagger_1.ApiOkResponse)({ description: 'List of all roles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/any/:idUser/:idAssociation'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific role' }),
    (0, swagger_1.ApiOkResponse)({ description: 'The role data' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    __param(0, (0, common_1.Param)('idUser')),
    __param(1, (0, common_1.Param)('idAssociation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':idUser/:idAssociation'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a specific role' }),
    (0, swagger_1.ApiOkResponse)({ description: 'The role has been successfully updated.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    __param(0, (0, common_1.Param)('idUser')),
    __param(1, (0, common_1.Param)('idAssociation')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, role_update_1.RoleUpdate]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idUser/:idAssociation'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a specific role' }),
    (0, swagger_1.ApiOkResponse)({ description: 'The role has been successfully deleted.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    __param(0, (0, common_1.Param)('idUser')),
    __param(1, (0, common_1.Param)('idAssociation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/users/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getUsersByRoleName", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)('roles'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map