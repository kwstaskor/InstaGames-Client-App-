import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NamesFormControl } from '../../Shared Components/input-field/custom-formControls';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageSent: boolean = false;
  contactForm = new FormGroup({
    firstName: new NamesFormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern("[a-zA-Z ]*")
    ]),
    lastName: new NamesFormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern("[a-zA-Z ]*")
    ]),
    phoneNumber: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]+$")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new NamesFormControl('', [
      Validators.required,
      Validators.maxLength(80000)
    ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

saveMessage(){
  
}

}
