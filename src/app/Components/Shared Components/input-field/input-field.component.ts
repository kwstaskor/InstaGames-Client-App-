import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() Control!:FormControl|any;
  @Input() PlaceHolder!:string;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  showErrors(){
   return this.Control.errors && (this.Control.touched || this.Control.dirty)
  }
  
}
