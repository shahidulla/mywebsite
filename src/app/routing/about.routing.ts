import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from '../about/about.component';
const aboutRoutes: Routes = ([
    {
        path: 'about',
        children: [
            { path: '', component: AboutMeComponent }
        ]
    }
]);

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
