import { Phone } from './phone.entity/phone.entity';
export declare class PhoneService {
    private phones;
    create(phone: Phone): Phone;
    findAll(): Phone[];
    findOne(id: number): Phone;
    update(id: number, updatedPhone: Phone): Phone;
    remove(id: number): boolean;
}
