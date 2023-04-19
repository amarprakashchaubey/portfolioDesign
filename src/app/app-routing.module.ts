import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { NewsFeedComponent } from './content/news-feed/news-feed.component';
import { ContactComponent } from './content/contact/contact.component';

const routes: Routes = [
  {path : '',redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent },
  {path : 'newsUpdate', component: NewsFeedComponent },
  {path : 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
