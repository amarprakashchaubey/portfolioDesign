import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendCaseDetailFormComponent } from '../send-case-detail-form/send-case-detail-form.component';
import { SendQueryFormComponent } from '../send-query-form/send-query-form.component';

@Component({
  selector: 'app-headingtitle',
  templateUrl: './headingtitle.component.html',
  styleUrls: ['./headingtitle.component.css']
})
export class HeadingtitleComponent {

  constructor(public dialog: MatDialog){}

  openCaseDetailInputDialog(): void {
    this.dialog.open(SendCaseDetailFormComponent, {
      width: '480px',
      height: '95%',
      autoFocus: 'false'
    });
  }

  openQueryDetailInputDialog(): void {
    this.dialog.open(SendQueryFormComponent, {
      width: '480px',
      height: '85%',
      autoFocus: 'false'
    });
  }
}
