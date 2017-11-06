import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from '../app/routing/routes';
import { AppComponent } from './app.component';
import {AboutModule} from '../app/modules/about.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [appRouting, AboutModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
