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
exports.AssociationsService = void 0;
const common_1 = require("@nestjs/common");
const association_entity_1 = require("./association.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roles_service_1 = require("../roles/roles.service");
const minutes_service_1 = require("../minutes/minutes.service");
let AssociationsService = class AssociationsService {
    constructor(associationRepository, rolesService, minutesService) {
        this.associationRepository = associationRepository;
        this.rolesService = rolesService;
        this.minutesService = minutesService;
    }
    async create(associationData) {
        const newAssociation = this.associationRepository.create(associationData);
        await this.associationRepository.save(newAssociation);
        return newAssociation;
    }
    async getAll() {
        return this.associationRepository.find({ relations: ['users'] });
    }
    async getById(idToFind) {
        const association = await this.associationRepository.findOne({ where: { id: (0, typeorm_2.Equal)(idToFind) }, relations: ['users'] });
        return association;
    }
    async update(id, name) {
        let association = await this.getById(id);
        association.name = name;
        await this.associationRepository.save(association);
        return association;
    }
    async delete(id) {
        await this.associationRepository.delete(id);
    }
    async getMembers(associationId) {
        const associationDTO = await this.toDTO(await this.getById(associationId));
        return associationDTO.members;
    }
    async toDTO(association) {
        if (!association.users) {
            return {
                id: association.id,
                name: association.name,
                members: []
            };
        }
        const memberPromises = association.users.map(user => this.userToMember(user, association.id));
        const members = await Promise.all(memberPromises);
        return {
            id: association.id,
            name: association.name,
            members: members,
        };
    }
    async userToMember(user, associationId) {
        const role = await this.rolesService.getByIds(user.id, associationId);
        return {
            userId: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            role: role.name
        };
    }
    async getMinutesByAssociationId(associationId, sort = 'ASC') {
        return this.minutesService.findMinutesByAssociationId(associationId, sort);
    }
};
exports.AssociationsService = AssociationsService;
exports.AssociationsService = AssociationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(association_entity_1.Association)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => roles_service_1.RolesService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => minutes_service_1.MinutesService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService,
        minutes_service_1.MinutesService])
], AssociationsService);
//# sourceMappingURL=associations.service.js.map