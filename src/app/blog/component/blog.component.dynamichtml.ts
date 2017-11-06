import { Component, OnInit } from '@angular/core';
import {BlogDataService} from '../../services/blog.data.service';
import {Post} from '../../models/post';
import {PostDetail} from '../../models/postdetails';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-html',
  templateUrl: '../template/blog.component.dynamichtml.html',
  styleUrls: ['../css/blog.componet.dynamichtml.css']
})

// tslint:disable-next-line:component-class-suffix
export class DynamicHtml implements OnInit {
  PostDetail: Post;
  constructor(private blogDataService: BlogDataService, private route: ActivatedRoute) {

        /// this.dynamicHtml = sanitizer.bypassSecurityTrustHtml(this.PostDetail.Description);
        }
  ngOnInit() {
    let Id = this.route.snapshot.params['Id'];
         this.blogDataService.getBlogPostDetails(Id)
                .subscribe(
                    res => { this.PostDetail = res; }
                   // err => console.log(err),
    );
  }

}
