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
exports.PhoneController = void 0;
const common_1 = require("@nestjs/common");
const phone_service_1 = require("./phone.service");
const phone_entity_1 = require("./phone.entity/phone.entity");
const swagger_1 = require("@nestjs/swagger");
let PhoneController = class PhoneController {
    constructor(phoneService) {
        this.phoneService = phoneService;
    }
    create(phone) {
        return this.phoneService.create(phone);
    }
    findAll() {
        return this.phoneService.findAll();
    }
    findOne(id) {
        return this.phoneService.findOne(+id);
    }
    update(id, phone) {
        return this.phoneService.update(+id, phone);
    }
    remove(id) {
        return this.phoneService.remove(+id);
    }
};
exports.PhoneController = PhoneController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new phone' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [phone_entity_1.Phone]),
    __metadata("design:returntype", void 0)
], PhoneController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all phones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhoneController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a phone by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhoneController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a phone by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, phone_entity_1.Phone]),
    __metadata("design:returntype", void 0)
], PhoneController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a phone by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhoneController.prototype, "remove", null);
exports.PhoneController = PhoneController = __decorate([
    (0, swagger_1.ApiTags)('phones'),
    (0, common_1.Controller)('phones'),
    __metadata("design:paramtypes", [phone_service_1.PhoneService])
], PhoneController);
//# sourceMappingURL=phone.controller.js.map