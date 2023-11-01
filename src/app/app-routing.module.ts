import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SiglePostComponent } from './pages/sigle-post/sigle-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: "", component:HomePageComponent},
  {path:'category/:id', component: SingleCategoryComponent},
  {path: 'post/:category/:id', component: SiglePostComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'term&conditions', component: TermConditionsComponent},
  {path: 'contact', component: ContactComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
