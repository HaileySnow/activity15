import { Component } from '@angular/core';
import DeveloperToolsList from '../Folders/developertoollist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeveloperListService } from '../services/developer-tool-list/developer-list.service';

@Component({
  selector: 'app-developer-tool-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './developer-tool-list.component.html',
  styleUrl: './developer-tool-list.component.css'
})
export class DeveloperToolListComponent {

  developerToolsList = [] as DeveloperToolsList [];
  constructor(private developertoolsService:DeveloperListService){
  this.developerToolsList = this.developertoolsService.getDeveloperTool();
  }

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;
	toolDuration: string = '';

	addDeveloperTool() {
		this.developertoolsService.addDeveloperTool(
			this.toolName,
			this.toolDescription,
			this.toolPrice,
			this.toolDuration,
		);

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
		this.toolDuration = '';
	}
}
