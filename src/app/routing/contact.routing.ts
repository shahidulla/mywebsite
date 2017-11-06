import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContactComponent} from '../contact/contact.component';

const contactRoutes: Routes = ([
    {
        path: '',
        children: [
            {path: '', component: ContactComponent }
        ]
    }
]);

export const contactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);
