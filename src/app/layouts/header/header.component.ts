import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navBg:any

  @HostListener('document:scroll') scrollover(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

      this.navBg = {
        'background-color' : 'transparent',
        'color' : 'white',        
        'backdrop-filter': 'blur(9px)',
        '-webkit-backdrop-filter' : 'blur(5px)',
        
      }
    }else {
      this.navBg = {}
    }
  }
}
