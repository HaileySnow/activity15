import { Injectable } from '@angular/core';
import PhoneContactList from '../../Folders/phonecontactlist';

@Injectable({
  providedIn: 'root'
})
export class PhonecontactListService {
private phonecontact: PhoneContactList[] = [];

  constructor() { }

  addPhoneContact(name: string, email: string, phone: number): void{
    this.phonecontact.push({

    name: name,
    email: email,
    phone: phone,
    });
  }
  getPhoneContact(): PhoneContactList[]{
    return this.phonecontact;
  }
}
