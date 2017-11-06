import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogDataService} from '../../services/blog.data.service';
import {Post} from '../../models/post';
import {PostDetail} from '../../models/postdetails';
import { ActivatedRoute, Router} from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import {Tag} from '../../models/tag';
import {DomSanitizer} from '@angular/platform-browser';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';
@Component({
    moduleId: module.id,
    templateUrl: '../template/blog.details.component.html',
    styleUrls: ['../css/blog.details.component.css'],
    encapsulation: ViewEncapsulation.None

})

export class BlogDetailsComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;

    Posts: Post[];
    PostDetail: Post;
    pageIdentifier: any;
    pageUrl: any;
    Tags: Tag[];
    dynamicHtml: any;
    // tslint:disable-next-line:max-line-length
    constructor(private blogDataService: BlogDataService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {

     /// this.dynamicHtml = sanitizer.bypassSecurityTrustHtml(this.PostDetail.Description);
    }

    ngOnInit() {

        this.blockUI.start();
        let Id = this.route.snapshot.params['Id'];

        this.blogDataService.getBlogPostDetails(Id)
            .subscribe(
                res => { this.PostDetail = res; },
                err => console.log(),
                () => this.blockUI.stop()
        );
        this.blogDataService.getBlogPostTag()
        .subscribe(tags => this.Tags = tags);

        this.pageUrl = window.location.href;
        this.pageIdentifier = Id;
    }
    aboutMe() {
        this.router.navigate(['about']);
    }
}
