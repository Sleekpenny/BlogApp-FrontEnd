import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogBackendDataService } from 'src/app/service/blog-backend-data.service';

@Component({
  selector: 'app-sigle-post',
  templateUrl: './sigle-post.component.html',
  styleUrls: ['./sigle-post.component.css']
})
export class SiglePostComponent implements OnInit {

  posts: any =[]
  postCategory: any
  constructor (private postService:BlogBackendDataService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params)=>{
      this.postCategory = params['category'];

        this.postService.singlePost(params['id']).subscribe({
          next: (results)=>{
            this.posts = results
                
              }
        })
      }
    })
  }
}
