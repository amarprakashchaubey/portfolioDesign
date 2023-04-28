import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  newsJsonUrl: string = 'assets/jsonFile/newsFeed.json';

  constructor(private http: HttpClient) { }

  getNewsData(): any{
    return this.http.get(this.newsJsonUrl);
  }
}
