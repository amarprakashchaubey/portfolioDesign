import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-send-case-detail-form',
  templateUrl: './send-case-detail-form.component.html',
  styleUrls: ['./send-case-detail-form.component.css']
})
export class SendCaseDetailFormComponent {

  caseDetailForm: FormGroup = new FormGroup('');

  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<SendCaseDetailFormComponent>){}

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.caseDetailForm = this.fb.group({
      personName: ['Amar', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fathersName: ['Praksjs', Validators.required],
      address1: ['noida', Validators.required],
      address2: ['New Delhi'],
      tehsil: ['tehsilValajd', Validators.required],
      district: ['dsit', Validators.required],
      state: ['up', Validators.required],
      pincode: ['123432', [Validators.required, Validators.pattern('[1-9]{1}[0-9]{2,6}')]],
      psName:['bbs', Validators.required],
      personEmail: ["checkEmail@co.in", [Validators.required, Validators.email]],
      contactNumber: ["9874563210",[Validators.required, Validators.pattern('[6-9]{1}[0-9]{2,10}')]],
      altContactNumber: ["6230456789", [Validators.pattern('[6-9]{1}[0-9]{2,10}')]],
      caseNumber: ['258963'],
      caseInfoDetails: ['once upon a time'],
      otherImpInformation: ['there is one man']
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onSubmitForm(){
    console.log(this.caseDetailForm.value);
    this.dialogRef.close();
  }
}
