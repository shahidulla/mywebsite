import {Component, OnInit, Renderer} from '@angular/core';
import {BlogDataService} from '../../services/blog.data.service';
import {Post} from '../../models/post';
import {Tag} from '../../models/tag';
import {Category} from '../../models/category';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '../template/blog.sidebarcomponent.html',
    styleUrls: ['../css/blog.sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    Posts: Post[];
    Tags: Tag[];
    Categories: Category[];

    constructor(private blogDataService: BlogDataService, private router: Router, private renderer: Renderer) {



    }
    postDetailsByCategoryId(category) {
        this.router.navigateByUrl('blog/dummy').
            then(() => this.router.navigate(['blog/category', category.Id]));

    }
    postDetailsByTagId(tag) {
        this.router.navigateByUrl('blog/dummy').
            then(() => this.router.navigate(['blog/tag', tag.Id]));
    }
    postDetails(post) {
        this.router.navigateByUrl('blog/dummy').
            then(() => this.router.navigate(['blog/details', post.Id]));
     }
    ngOnInit(): void {

        this.blogDataService.getBlogPostFromApi()
            .subscribe(posts => this.Posts = posts.slice(0, 10));


        this.blogDataService.getBlogPostTag()
            .subscribe(tags => this.Tags = tags);

        this.blogDataService.getBlogPostCategory()
            .subscribe(categories => this.Categories = categories);
    }

    goToTop() {
        this.renderer.setElementProperty(document.body, 'scrollTop', 0);
    }
}
