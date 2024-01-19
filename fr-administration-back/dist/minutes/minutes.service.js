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
exports.MinutesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const minute_entity_1 = require("./minute.entity");
let MinutesService = class MinutesService {
    constructor(minutesRepository) {
        this.minutesRepository = minutesRepository;
    }
    async create(minuteInput) {
        const minute = this.minutesRepository.create(minuteInput);
        await this.minutesRepository.save(minute);
        return minute;
    }
    async getAll() {
        return this.minutesRepository.find();
    }
    async getById(id) {
        const minute = await this.minutesRepository.findOne({ where: { id: id } });
        if (!minute) {
            throw new common_1.NotFoundException(`Minute with ID "${id}" not found`);
        }
        return minute;
    }
    async update(id, minuteUpdate) {
        const minute = await this.getById(id);
        Object.assign(minute, minuteUpdate);
        await this.minutesRepository.save(minute);
        return minute;
    }
    async remove(id) {
        const result = await this.minutesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Minute with ID "${id}" not found`);
        }
    }
    async findMinutesByAssociationId(associationId, sort = 'ASC') {
        return this.minutesRepository.find({
            where: { association: { id: associationId } },
            order: { date: sort }
        });
    }
};
exports.MinutesService = MinutesService;
exports.MinutesService = MinutesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(minute_entity_1.Minute)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MinutesService);
//# sourceMappingURL=minutes.service.js.map