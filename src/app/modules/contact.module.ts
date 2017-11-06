import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../modules/shared.module';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { contactRouting } from '../routing/contact.routing';
import { BlogDataService } from '../services/blog.data.service';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, contactRouting, HttpModule],
    declarations: [ContactComponent],
    providers: [BlogDataService]
})

export class ContactModule {

}
