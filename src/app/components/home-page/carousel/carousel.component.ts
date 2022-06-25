import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  j = 0
  carousel(event: any, id: string){
    if(id == "left"){
      this.j--
      this.changeCarousel()
      this.resetInterval()
    }
    if(id == "right"){
      this.j++
      this.changeCarousel()
      this.resetInterval()
    }
  }

  interval = setInterval(()=>this.run(), 3000)

  resetInterval() {
    clearInterval(this.interval)
    this.interval = setInterval(()=>this.run(), 3000)
  }
  run() {
    this.j++;
    this.changeCarousel()
  }

  changeCarousel(){
    const imgs = this.el.nativeElement.querySelectorAll('#imgs img')
    const image = this.el.nativeElement.querySelector('#imgs')
    if (imgs.length > 1) {
      if (this.j > imgs.length - 1) {
        this.j = 0
      } else if (this.j < 0) {
        this.j = imgs.length - 1
      }
      image.style.transform = `translateX(${-this.j *100}%)`
    }
  }

}
