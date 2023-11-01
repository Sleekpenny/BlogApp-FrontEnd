import { Component, HostListener, OnInit } from '@angular/core';
import { BlogBackendDataService } from 'src/app/service/blog-backend-data.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  navstyle:any
  navBg:any;
  categoryResult:any = []

  constructor (private loadService:BlogBackendDataService){}

  ngOnInit(): void {
    this.loadService.loadCategory().subscribe({
      next: (results)=>{
        console.log(results)
        this.categoryResult = results
      }
    })
  }

 

  @HostListener('document:scroll') scrollover(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

      this.navstyle = {
        'background-color' : 'transparent',        
      }
      this.navBg = {
        'background-color' : '#F9F9F9',
        'padding' : '16px',
        'border-radius' : '10px',
        
      }
   
    }else {
      this.navstyle = {}
      this.navBg = {}
    }
  }



}
