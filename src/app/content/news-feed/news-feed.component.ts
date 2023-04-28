import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent {
  newsArray: any[] = [];
  totalCards: number = 0;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number = 6;
  totalPages: number = 0;
  overflowWidth: string | undefined;
  cardWidth: string | undefined;
  containerWidth: number | undefined;
  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef | undefined;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  constructor(private commonService: CommonService){}

  ngOnInit() {
    this.commonService.getNewsData().subscribe((res: { newsUpdate: any; }) => {
      this.newsArray = res.newsUpdate;
      this.initialFunction();
    })

  }

  initialFunction(){
    this.totalCards = this.newsArray.length;
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {

    return Math.floor(this.container?.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

  // clickToOpenNewTab(event){
  //   console.log(event);
  // }
}
