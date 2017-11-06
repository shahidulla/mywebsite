
import {Component, OnInit} from '@angular/core';
import {BlogDataService} from '../../services/blog.data.service';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
        moduleId: module.id,
        templateUrl: '../template/blog.component.html',
        styleUrls: ['../css/blog.component.css']
})

export class BlogCategoryComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    Posts: Post[];
    constructor(private blogDataService: BlogDataService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.blockUI.start();
        let Id = this.route.snapshot.params["Id"];
        this.blogDataService.getBlogPostOnCategory(Id)
            .subscribe(posts => { this.Posts = posts; },
            err => console.log(err),
            () => this.blockUI.stop()
        );
    }
}
