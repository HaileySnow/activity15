import { Component } from '@angular/core';
import ToolList from '../Folders/toollist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolListService } from '../services/tool-list/tool-list.service';

@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {

  toolList = [] as ToolList [];
  constructor(private toolService:ToolListService){
  this.toolList = this.toolService.getTool();
  }

	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	quantity: number = 0;

	addTool(): void {
		this.toolService.addTool(
			this.id,
			this.name,
			this.description,
			this.price,
			this.quantity,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.quantity = 0;
	}
}
