import { Component } from '@angular/core';
import LaptopSpecs from '../Folders/laptopspecslist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaptopSpecsListService } from '../services/laptop-specs-list/laptop-specs-list.service';

@Component({
  selector: 'app-laptop-specs-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './laptop-specs-list.component.html',
  styleUrls: ['./laptop-specs-list.component.css']
})
export class LaptopSpecsListComponent {

  laptops: LaptopSpecs[] = []; 
  model: string = '';
  processor: string = '';
  ram: string = '';
  storage: string = '';
  display: string = '';
  graphics: string = '';

  constructor(private laptopspecsService: LaptopSpecsListService) {
    this.laptops = this.laptopspecsService.getLaptopSpecs();  
  }

  addLaptop() {
    this.laptopspecsService.addLaptopSpecs(
      this.model,   
      this.processor,
      this.ram,
      this.storage,
      this.display,
      this.graphics
    );

   
    this.model = '';
    this.processor = '';
    this.ram = '';
    this.storage = '';
    this.display = '';
    this.graphics = '';

    
    this.laptops = this.laptopspecsService.getLaptopSpecs();
  }

}
