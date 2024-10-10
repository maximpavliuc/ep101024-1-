import { PhoneService } from './phone.service';
import { Phone } from './phone.entity/phone.entity';
export declare class PhoneController {
    private readonly phoneService;
    constructor(phoneService: PhoneService);
    create(phone: Phone): Phone;
    findAll(): Phone[];
    findOne(id: string): Phone;
    update(id: string, phone: Phone): Phone;
    remove(id: string): boolean;
}
