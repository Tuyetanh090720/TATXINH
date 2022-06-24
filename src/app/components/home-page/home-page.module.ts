import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SlideDealComponent } from './slide-deal/slide-deal.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    ListProductComponent,
    SlideDealComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    ListProductComponent,
    SlideDealComponent,
    ProductPageComponent
  ]
})
export class HomePageModule { }
