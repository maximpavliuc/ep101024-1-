"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneService = void 0;
const common_1 = require("@nestjs/common");
let PhoneService = class PhoneService {
    constructor() {
        this.phones = [];
    }
    create(phone) {
        const newId = this.phones.length > 0 ? Math.max(...this.phones.map(p => p.id)) + 1 : 1;
        phone.id = newId;
        this.phones.push(phone);
        return phone;
    }
    findAll() {
        return this.phones;
    }
    findOne(id) {
        return this.phones.find(phone => phone.id === id);
    }
    update(id, updatedPhone) {
        const index = this.phones.findIndex(phone => phone.id === id);
        if (index === -1)
            return null;
        this.phones[index] = { ...this.phones[index], ...updatedPhone };
        return this.phones[index];
    }
    remove(id) {
        const index = this.phones.findIndex(phone => phone.id === id);
        if (index === -1)
            return false;
        this.phones.splice(index, 1);
        return true;
    }
};
exports.PhoneService = PhoneService;
exports.PhoneService = PhoneService = __decorate([
    (0, common_1.Injectable)()
], PhoneService);
//# sourceMappingURL=phone.service.js.map