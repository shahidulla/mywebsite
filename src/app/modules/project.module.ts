import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../project/component/projects.component';
import { DetailComponent } from '../project/component/detail.component';
import { ProjectService } from '../services/project.service';
import { TruncatePipe } from '../pipes/trunc.pipe';
import { SharedModule } from '../modules/shared.module';
import {projectRouting} from '../routing/project.routing';
@NgModule({
    imports: [CommonModule, SharedModule, projectRouting],
    declarations: [ProjectsComponent, DetailComponent, TruncatePipe],
    providers:[ProjectService]
})
export class ProjectModule {

}
