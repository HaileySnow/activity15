import { Component } from '@angular/core';
import ToolList from '../Folders/toollist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {

  tools: ToolList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	price: string = '';
	quantity: string = '';

	addTool(): void {
		this.tools.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			price: Number(this.price),
			quantity: Number(this.quantity),
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.price = '';
		this.quantity = '';
	}
}
