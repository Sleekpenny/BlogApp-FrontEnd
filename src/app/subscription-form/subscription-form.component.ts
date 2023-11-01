import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { sub } from '../infterfaces/subInterface';
import { BlogBackendDataService } from '../service/blog-backend-data.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  usedEmail:boolean= false;
  constructor(private subService:BlogBackendDataService){}
  
  onSubmit(form:NgForm){

    const subForm:sub = {
      name: form.value.name,
      email: form.value.email,
    }



    this.subService.checkEmail(subForm.email).subscribe ({
      next: (reuseEmail)=>{
        if (reuseEmail.empty){

          this.subService.subscription(subForm)      
         this.usedEmail = false          
        } else{
          this.usedEmail = true
          console.log (reuseEmail)
        }
      }
    })
  }

}
