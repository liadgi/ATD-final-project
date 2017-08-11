import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DashboardSearchComponent implements OnInit {
  query: String;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.params['query'];
    this.postsService.loadPosts('search', 1, this.query);
  }
  pageChanged(page) {
    this.postsService.loadPosts('search', page, this.query);
  }

}
