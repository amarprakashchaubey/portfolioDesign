import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { NewsFeedComponent } from './content/news-feed/news-feed.component';
import { ContactComponent } from './content/contact/contact.component';
import { HeadingtitleComponent } from './common/headingtitle/headingtitle.component';
import { FooterComponent } from './common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SendQueryFormComponent } from './common/send-query-form/send-query-form.component';
import { SendCaseDetailFormComponent } from './common/send-case-detail-form/send-case-detail-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsFeedComponent,
    ContactComponent,
    HeadingtitleComponent,
    FooterComponent,
    SendQueryFormComponent,
    SendCaseDetailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
