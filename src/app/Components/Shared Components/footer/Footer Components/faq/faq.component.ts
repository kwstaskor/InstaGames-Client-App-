import { Component, OnInit } from '@angular/core';
declare const AcordionClick:any
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     AcordionClick();
  }

}
