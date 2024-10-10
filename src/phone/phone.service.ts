import { Injectable } from '@nestjs/common';
import { Phone } from './phone.entity/phone.entity';

@Injectable()
export class PhoneService {
  private phones: Phone[] = [];

  create(phone: Phone): Phone {
    const newId = this.phones.length > 0 ? Math.max(...this.phones.map(p => p.id)) + 1 : 1;
    phone.id = newId;
    this.phones.push(phone);
    return phone;
  }

  findAll(): Phone[] {
    return this.phones;
  }

  findOne(id: number): Phone {
    return this.phones.find(phone => phone.id === id);
  }

  update(id: number, updatedPhone: Phone): Phone {
    const index = this.phones.findIndex(phone => phone.id === id);
    if (index === -1) return null;
    this.phones[index] = { ...this.phones[index], ...updatedPhone };
    return this.phones[index];
  }

  remove(id: number): boolean {
    const index = this.phones.findIndex(phone => phone.id === id);
    if (index === -1) return false;
    this.phones.splice(index, 1);
    return true;
  }
}
