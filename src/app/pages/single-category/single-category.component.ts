import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogBackendDataService } from 'src/app/service/blog-backend-data.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{
  post :any = []
  similarPost:any = []
  constructor(private route:ActivatedRoute,private  postService:BlogBackendDataService){}

  ngOnInit(): void {
  this.route.params.subscribe({
    next: (results)=>{
      this.postService.singleCategory(results['id']).subscribe({
        next:(results)=>{
          this.post = results;
          this.loadSimilarPost(this.post.categorys.categoryId)
          console.log (this.post)          
        }
      })
    }
  })  
}

loadSimilarPost(catid){
  this.postService.similarpostCateogry(catid).subscribe({
    next:(results)=>{
      this.similarPost = results
      console.log (results)
    }
  })
}
}