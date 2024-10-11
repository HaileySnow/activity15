import { Component } from '@angular/core';
import SoftwareList from '../Folders/softwarelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoftwareListService } from '../services/software-list/software-list.service';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {

  softwareList = [] as SoftwareList [];
  constructor(private softwareServices:SoftwareListService){
  this.softwareList = this.softwareServices.getSoftware();
  }
	name: string = '';
	description: string = '';
	platform: string = '';

	addSoftware(): void {
		this.softwareServices.addSoftware(
			
			this.name,
			this.description,
			this.platform,
		);


		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
