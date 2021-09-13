import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent implements OnInit {
  
  @Input() Control!: FormControl | any;
  @Input() PlaceHolder!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    return this.Control.errors && (this.Control.touched || this.Control.dirty)
   }
}
