import { NgModule } from '@angular/core';
import { AboutMeComponent } from './../about/about.component';
import { RatingModule } from 'ng2-rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../modules/shared.module';
import {aboutRouting} from '../routing/about.routing';
import {AboutDataService} from '../services/about.data.service';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { BlockUIModule } from 'ng-block-ui';
@NgModule({
    imports: [RatingModule, FormsModule, SharedModule, CommonModule, aboutRouting, HttpModule, BlockUIModule],
    declarations: [AboutMeComponent],
    providers: [AboutDataService]
})

export class AboutModule {

}
