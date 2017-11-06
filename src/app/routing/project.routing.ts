import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProjectsComponent } from '../project/component/projects.component';
import { DetailComponent } from '../project/component/detail.component';
const projectRoutes: Routes =
([
    {
        path: '',
        children: [
           { path: '', component: ProjectsComponent },
           { path: 'detail/:id', component: DetailComponent }
        ]
    }
    ]);

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);
