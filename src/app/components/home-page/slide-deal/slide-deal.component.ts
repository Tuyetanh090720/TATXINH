import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide-deal',
  templateUrl: './slide-deal.component.html',
  styleUrls: ['./slide-deal.component.css']
})
export class SlideDealComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
  }

  j = 0
  sliderDeal(event: any, id: string){
    if(id == "deal-left"){
      this.j--
      this.changeSlide()
      this.resetIntervalDeal()
    }
    if(id == "deal-right"){
      this.j++
      this.changeSlide()
      this.resetIntervalDeal()
    }
  }

  intervalDeal = setInterval(()=>this.runDeal(), 2000)

  resetIntervalDeal() {
    clearInterval(this.intervalDeal)
    this.intervalDeal = setInterval(()=>this.runDeal(), 2000)
  }
  runDeal() {
    this.j++;
    this.changeSlide()
  }

  changeSlide(){
    const pro = this.el.nativeElement.querySelectorAll('.pro-loop')
    const slide = this.el.nativeElement.querySelector('#slide-deal')
    if (pro.length > 4) {
      if (this.j > pro.length - 4) {
        this.j = 0
      } else if (this.j < 0) {
        this.j = pro.length - 4
      }
      slide.style.transform = `translateX(${-this.j *25}%)`
    }
  }
}
