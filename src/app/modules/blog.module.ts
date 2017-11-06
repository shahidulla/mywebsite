
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from '../blog/component/blog.component';
import {blogRouting} from '../routing/blog.routing';
import {SidebarComponent} from '../blog/component/blog.sidebar.component';
import {BlogDataService} from '../services/blog.data.service';
import {BlogDetailsComponent} from '../blog/component/blog.details.component';
import { BlogCategoryComponent } from '../blog/component/blog.category.component';
import { BlogTagComponent } from '../blog/component/blog.tag.component';
import {HttpModule} from '@angular/http';
import {DummyComponent} from '../blog/dummy/dummy.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import {SharedModule} from '../modules/shared.module';
import { BlockUIModule } from 'ng-block-ui';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { DisqusModule } from 'angular2-disqus';
import {DynamicHtml} from '../blog/component/blog.component.dynamichtml';
@NgModule({
    imports: [blogRouting, CommonModule, HttpModule, Ng2PaginationModule, BlockUIModule, SharedModule, DisqusModule ],
    // tslint:disable-next-line:max-line-length
    declarations: [BlogComponent, SidebarComponent, BlogDetailsComponent, BlogCategoryComponent, BlogTagComponent, DummyComponent, DynamicHtml],
    providers: [BlogDataService]
})

export class BlogModule {

}
