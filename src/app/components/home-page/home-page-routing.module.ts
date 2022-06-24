import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes:Routes =[
{path:'', component: HomePageComponent},
{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'product-detail', component: ProductPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomePageRoutingModule { }
