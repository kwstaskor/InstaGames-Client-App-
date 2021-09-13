import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})

export class InputNumberComponent implements OnInit {
  @Input() Control!:FormControl|any;
  @Input() PlaceHolder!:string;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  showErrors(){
   return this.Control.errors && (this.Control.touched || this.Control.dirty)
  }
}
