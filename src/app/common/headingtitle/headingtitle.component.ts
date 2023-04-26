import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SendCaseDetailFormComponent } from 'src/app/common/send-case-detail-form/send-case-detail-form.component';

@Component({
  selector: 'app-headingtitle',
  templateUrl: './headingtitle.component.html',
  styleUrls: ['./headingtitle.component.css']
})
export class HeadingtitleComponent {

  constructor(public dialog: MatDialog){}

  openInputCaseDetailDialog(): void {
    this.dialog.open(SendCaseDetailFormComponent, {
      width: '480px',
    });
  }
}
