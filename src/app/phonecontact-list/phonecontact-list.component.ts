import { Component } from '@angular/core';
import PhoneContactList from '../Folders/phonecontactlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhonecontactListService } from '../services/phonecontact-list/phonecontact-list.service';

@Component({
  selector: 'app-phonecontact-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './phonecontact-list.component.html',
  styleUrl: './phonecontact-list.component.css'
})
export class PhonecontactListComponent {

  phoneContactList = [] as PhoneContactList [];
  constructor(private phonecontactService:PhonecontactListService){
  this.phoneContactList = phonecontactService.getPhoneContact();
  }

	name: string = '';
	email: string = '';
	phone: number = 0;

	addPhoneContact(): void {
		this.phonecontactService.addPhoneContact(
		this.name,
		this.email,
		this.phone,
		);

		this.name = '';
		this.email = '';
		this.phone = 0;
	}

}
