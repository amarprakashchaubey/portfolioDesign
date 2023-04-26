import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-send-case-detail-form',
  templateUrl: './send-case-detail-form.component.html',
  styleUrls: ['./send-case-detail-form.component.css']
})
export class SendCaseDetailFormComponent {

  caseDetailForm: FormGroup = new FormGroup('');

  constructor( private fb: FormBuilder){}

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.caseDetailForm = this.fb.group({
      personName: ['Amar'],
      fathersName: ['Praksjs'],
      address1: ['noida'],
      address2: ['New Delhi'],
      tehsil: ['tehsilValajd'],
      district: ['dsit'],
      state: ['up'],
      pincode: ['123432'],
      psName:['bbs'],
      email: "checkEmail@co.in",
      contactNumber: "9874563210",
      altContactNumber: "1230456789"     
    })
  }

  onSubmitForm(){
    console.log(this.caseDetailForm)
  }
}
