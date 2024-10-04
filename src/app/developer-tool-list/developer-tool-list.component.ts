import { Component } from '@angular/core';
import DeveloperToolsList from '../Folders/developertoollist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-developer-tool-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './developer-tool-list.component.html',
  styleUrl: './developer-tool-list.component.css'
})
export class DeveloperToolListComponent {

  developerTools: DeveloperToolsList[] = [];

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;
	toolDuration: string = '';

	addDeveloperTool() {
		this.developerTools.push({
			toolName: this.toolName,
			toolDescription: this.toolDescription,
			toolPrice: this.toolPrice,
			toolDuration: this.toolDuration,
		});

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
		this.toolDuration = '';
	}
}
