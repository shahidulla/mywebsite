import {Component, OnInit, Renderer} from '@angular/core';
import {BlogDataService} from '../../services/blog.data.service';
import {Post} from '../../models/post';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import {FooterComponent} from '../../footer/footer.component';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    // templateUrl: 'blog.component.html?v='+myGlobals.version,
    templateUrl: '../template/blog.component.html',
    styleUrls: ['../css/blog.component.css']
})
export class BlogComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    Posts: Post[];

    constructor(private blogDataService: BlogDataService, private renderer: Renderer, private router: Router) {

      //  this.blogDataService.getUser()
      // .subscribe(users => this.users = users);

    }
    ngOnInit(): void {
        this.blockUI.start();

        this.blogDataService.getBlogPostFromApi()
            .subscribe(posts => { this.Posts = posts; },
           err => console.log(err),
           () => this.blockUI.stop()
        );
    }

    goToTop() {
        this.renderer.setElementProperty(document.body, 'scrollTop', 0);
    }

    aboutMe() {
        this.router.navigate(['about']);
    }
}
