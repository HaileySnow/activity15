import { Component } from '@angular/core';
import SoftwareList from '../Folders/softwarelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {

  softwareList: SoftwareList[] = [];
	name: string = '';
	description: string = '';
	platform: string = '';

	addSoftware(): void {
		this.softwareList.push({
			
			name: this.name,
			description: this.description,
			platform: this.platform,
		});


		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
