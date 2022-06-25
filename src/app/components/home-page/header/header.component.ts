import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {

  myDate = new Date();
  constructor(private datePipe: DatePipe, private renderer: Renderer2, private el: ElementRef){
    formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  ngOnInit(): void {
  }

  count = 0
  showMenu(){
    this.count = this.count + 1
    const menumobile = this.el.nativeElement.querySelector(".menu-mobile")

    if(this.count % 2 == 1){
      menumobile.style.display = "block"
    }
    if (this.count % 2 == 0) {
      menumobile.style.display = "none"
      this.count = 0
    }
  }

  showNeMenu(event: any, className: string, id: string){

    const plus = this.el.nativeElement.querySelector('.plus')
    const li = this.el.nativeElement.querySelectorAll('.plus .ne-dropdown-menu')


    for (let i = 0; i < li.length; i++) {
      this.renderer.removeClass(li[i], className)
    }

    this.renderer.addClass(li[id], className)
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const mainMenu = this.el.nativeElement.querySelector('.main-menu-area')
    const mobileMenu = document.querySelector('.mean-bar-mobile')
    let posMainMenu = mainMenu.getBoundingClientRect()
    let croll_y = window.scrollY
    if (croll_y > parseInt(posMainMenu.top)) {
      this.renderer.addClass(mainMenu, 'fixed')
      this.renderer.addClass(mobileMenu, 'fixed')
    } else {
      this.renderer.removeClass(mainMenu, 'fixed')
      this.renderer.removeClass(mobileMenu, 'fixed')
    }
  }
}

