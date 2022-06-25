import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  clickTab(event: any, className: string, id: string){
    let myTags ;
    myTags = this.el.nativeElement.querySelectorAll(".product-tabs li")
    for(let i =0; i< myTags.length; i++)
    {
      this.renderer.removeClass(myTags[i], className)
    }
    this.renderer.addClass(myTags[id], className)


    let myPanels
    myPanels = this.el.nativeElement.querySelectorAll(".panel")
    for(let i =0; i< myTags.length; i++)
    {
      this.renderer.removeClass(myPanels[i], className)
    }
    this.renderer.addClass(myPanels[id], className)
  }

  j = 0
  transThumb(event: any, id: string){
    const lis = this.el.nativeElement.querySelectorAll('.product-thumb')
    const slideProduct = this.el.nativeElement.querySelector('#slide-product')
    if(id == "slide-prev"){
      this.j--
      this.changeThumb()
    }
    if(id == "slide-next"){
      this.j++
      this.changeThumb()
    }
  }
  changeThumb(){
    const lis = this.el.nativeElement.querySelectorAll('.product-thumb')
    const slideProduct = this.el.nativeElement.querySelector('#slide-product')
    if (lis.length > 4) {
      if (this.j > lis.length - 4) {
        this.j = 0
      } else if (this.j < 0) {
        this.j = lis.length - 4
      }
      slideProduct.style.transform = `translateX(${-this.j *25}%)`
    }
  }
}

