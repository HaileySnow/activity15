import { Component } from '@angular/core';
import PhoneContactList from '../Folders/phonecontactlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phonecontact-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './phonecontact-list.component.html',
  styleUrl: './phonecontact-list.component.css'
})
export class PhonecontactListComponent {

  phoneContactList: PhoneContactList[] = [];
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {
		this.phoneContactList.push({
			name: this.name,
			email: this.email,
			phone: this.phone,
		});

		this.name = '';
		this.email = '';
		this.phone = '';
	}

}
