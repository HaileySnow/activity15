import { Component } from '@angular/core';
import FrameworkList from '../Folders/frameworklist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {

  frameworks: FrameworkList[] = [];

	name: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() {
		this.frameworks.push({
			name: this.name,
			description: this.description,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.name = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}

}
