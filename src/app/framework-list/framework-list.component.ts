import { Component } from '@angular/core';
import FrameworkList from '../Folders/frameworklist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrameworkListService } from '../services/framework-list/framework-list.service';

@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {

  frameworkList = [] as FrameworkList [];
  constructor(private frameworkService:FrameworkListService){
  this.frameworkList = frameworkService.getFramework();
  }
	name: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() {
		this.frameworkService.addFramework(
			this.name,
			this.description,
			this.developedBy,
			this.firstRelease,
			this.latestRelease,
		);

		this.name = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}

}
