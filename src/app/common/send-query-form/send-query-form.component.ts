import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-send-query-form',
  templateUrl: './send-query-form.component.html',
  styleUrls: ['./send-query-form.component.css']
})
export class SendQueryFormComponent {
  
  queryDetailForm: FormGroup = new FormGroup('');

  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<SendQueryFormComponent>){}

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.queryDetailForm = this.fb.group({
      personName: ['Amar', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      personEmail: ["checkEmail@co.in", [Validators.required, Validators.email]],
      contactNumber: ["9874563210",[Validators.required, Validators.pattern('[6-9]{1}[0-9]{2,10}')]],
      altContactNumber: ["6230456789", [Validators.pattern('[6-9]{1}[0-9]{2,10}')]],
      queryAbout: ['once upon a time', Validators.required],
      queryDescription: ['there is one man', Validators.required]
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onSubmitForm(){
    console.log(this.queryDetailForm.value);
    this.dialogRef.close();
  }

}
