import { Component, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() postData: Object

  ngOnInit(): void {
    console.log(this.postData)
  }


}
