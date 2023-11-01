import { Component, OnInit } from '@angular/core';
import { BlogBackendDataService } from 'src/app/service/blog-backend-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  postResults:any =[]
  lastestPost:any = []

  constructor (private postService:BlogBackendDataService){}

  ngOnInit(): void {
    this.postService.loadPost().subscribe({
      next: (results)=>{
        console.log(results);
        this.postResults = results
      }
    })

    this.postService.loadLatest().subscribe({
      next: (results)=>{
        this.lastestPost = results
      }
    })
  }



}
