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
    firstname: new FormControl('', [Validators.required]), //required
    middlename: new FormControl(),
    lastname: new FormControl('', [Validators.required]), //required
    department: new FormControl('', [Validators.required]), //required
    gender: new FormControl('', [Validators.required]), //required
    DOB: new FormControl('', [Validators.required]), //required
    address: new FormControl('', [Validators.required]), //required
    pincode: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]) //required and has to be of 6 digits.
  })
  
  onSubmit() {
    console.log(this.personForm.value);
  }

}
