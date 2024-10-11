import { Component } from '@angular/core';
import ComputerHardware from '../Folders/computerhardwarelist';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { ComputerHardwareListService } from '../services/computer-hardware-list/computer-hardware-list.service';

@Component({
  selector: 'app-computer-hardware-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {

  computerHardware = [] as ComputerHardware [];
  constructor(private computerhardwareService:ComputerHardwareListService){
  this.computerHardware = this.computerhardwareService.getComputerHardware();
  }

	name: string = '';
	location: string = '';
	type: string = '';
	price: number = 0;

	addComputerHardware() {
		this.computerhardwareService.addComputerHardware(
	    this.name,
		this.location,
		this.type,
		this.price,
		);

		this.name = '';
		this.location = '';
		this.type = '';
		this.price = 0;
	}

}
