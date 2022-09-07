import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    middlename: new FormControl(),
    lastname: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    DOB: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })
  
  onSubmit() {
    console.log(this.personForm.value);
  }

}
