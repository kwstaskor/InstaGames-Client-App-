import { Component, OnInit } from '@angular/core';
declare const AcordionClick:any
@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AcordionClick();
  }

}
