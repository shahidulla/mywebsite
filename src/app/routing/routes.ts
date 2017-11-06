
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {ErrorComponent} from '../error/error.component'
export const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
     { path: 'blog', loadChildren: 'app/modules/blog.module#BlogModule' },
     { path: 'contact', loadChildren: 'app/modules/contact.module#ContactModule' },
     { path: 'project', loadChildren: 'app/modules/project.module#ProjectModule' },
    // { path: '**', component: ErrorComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
