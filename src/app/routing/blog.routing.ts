import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from '../blog/component/blog.component';
import {SidebarComponent} from '../blog/component/blog.sidebar.component';
import {BlogDetailsComponent} from '../blog/component/blog.details.component';
import { BlogCategoryComponent } from '../blog/component/blog.category.component';
import {BlogTagComponent} from '../blog/component/blog.tag.component';
import { DummyComponent } from '../blog/dummy/dummy.component';
const blogRoutes: Routes = ([
    {
        // path: 'blog',
        path: '',
        component: SidebarComponent,
        children: [
            { path: '', component: BlogComponent},
            {  path: 'details/:Id', component: BlogDetailsComponent},
            { path: 'category/:Id', component: BlogCategoryComponent },
            { path: 'tag/:Id', component: BlogTagComponent },
            { path: 'category/:Id/details/:Id', component: BlogDetailsComponent },
            { path: 'tag/:Id/details/:Id', component: BlogDetailsComponent},
            {path: 'dummy', component: DummyComponent}
        ]
    }
]);

export const blogRouting: ModuleWithProviders = RouterModule.forChild(blogRoutes);
