import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { BlogDataService } from '../../services/blog.data.service';
import { Post } from '../../models/post';
import {ActivatedRoute} from '@angular/router';


@Component({
moduleId: module.id,
templateUrl: '../template/blog.component.html',
styleUrls: ['../css/blog.component.css']
})

export class BlogTagComponent implements OnInit, OnDestroy, OnChanges {
    Posts: Post[];
    private subscription;
    constructor(private blogDataService: BlogDataService, private route: ActivatedRoute) {

}

    ngOnInit(): void {
        let Id = this.route.snapshot.params['Id'];

      this.subscription = this.blogDataService.getBlogPostOnTag(Id)
            .subscribe(posts => this.Posts = posts);
      // this.subscription.unsubscribe();
    }
    ngOnChanges(): void {
        this.subscription.unsubscribe();

    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();

    }
}
