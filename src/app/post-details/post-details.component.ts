import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(value => console.log(value))
    })
  }

  ngOnInit(): void {
  }

}
