import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'footer-component',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']

})

export class FooterComponent implements OnInit {
    Year: number;
    ngOnInit(): void {
            this.Year = new Date().getFullYear();
        }
    }
