import { Component, Renderer, OnInit} from '@angular/core';
// import *as myGlobals from '../shared/globals'
import { Title } from '@angular/platform-browser';
import {AboutDataService} from '../services/about.data.service';
import {Experience} from '../models/exprience';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@
Component({
    moduleId: module.id,
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})

export class AboutMeComponent implements OnInit {
  isWelcome: boolean;
  Experiences: Experience[];
  @BlockUI() blockUI: NgBlockUI;
  backends: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'C#'
    },
    {
      id: 2,
      rating: 4.5,
      language: 'ASP.NET MVC'
    },
    {
      id: 3,
      rating: 4.6,
      language: 'ASP.NET Web Api and WCF'
    },
    {
      id: 4,
      rating: 4.6,
      language: 'ASP.NET Core MVC'
    },
    {
      id: 5,
      rating: 4.6,
      language: 'ASP.NET Core Wep Api'
    },
    {
      id: 6,
      rating: 4.6,
      language: 'ASP.NET Web Forms'
    },
    {
      id: 6,
      rating: 4.6,
      language: 'Node.js'
    },

  ];
  frontends: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'HTML and CSS'
    },
    {
      id: 2,
      rating: 4.5,
      language: 'Angular'
    },
    {
      id: 3,
      rating: 4.6,
      language: 'Java Script, ES6 and Type Script'
    },
    {
      id: 4,
      rating: 4.6,
      language: 'jQuery'
    },

  ];

  databases: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'SQL'
    },
    {
      id: 2,
      rating: 4.5,
      language: 'MongoDB'
    },
  ];

  toolseditors: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'Source Controls: TFS and Git'
    },
    {
      id: 2,
      rating: 4.5,
      language: 'Editors: Visual Studio Code and Sublime Text'
    },
    {
      id: 3,
      rating: 4.5,
      language: 'IDEs: Visual Studio, Web Strom, and Eclipse'
    },
    {
      id: 4,
      rating: 4.5,
      language: 'Task Schedulerr: Gulp and WebPack'
    },
  ];

  dependencyinjections: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'Autoface'
    },
    {
      id: 2,
      rating: 4.5,
      language: 'Unity'
    },

    {
      id: 3,
      rating: 4.5,
      language: 'Ninject'
    },
  ];
  cloudtechnologies: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'Azure and Amazon'
    },
  ];
  objectrelationalmappers: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'Entity Framework and Entity Framework core'
    },
    {
      id: 2,
      rating: 4.5,
      language: 'LINQ'
    },
  ];
  microorms: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'Dapper'
    },
  ];
  desktopapplications: any[]= [
    {
      id: 1,
      rating: 4,
      language: 'Windows Forms'
    },
  ];
    experiences: any[] = [
        {
            id: 1,
            rating: 4,
            language: 'C#'
        },

        {
            id: 2,
            rating: 4.5,
            language: 'ASP.NET MVC'
        },

        {
            id: 3,
            rating: 3,
            language: 'Java Script and jQuery'
        },

        {
            id: 4,
            rating: 3,
            language: 'Angular'
        },

        {
            id: 5,
            rating: 3,
            language: 'Node.js'
        },

        {
            id: 6,
            rating: 3,
            language: 'HTML and CSS'
        },

        {
            id: 7,
            rating: 3.6,
            language: 'SQL and LINQ'
        },

        {
            id: 8,
            rating: 4.6,
            language: 'ASP.NET Web Api and WCF'
        },
        {
            id: 9,
            rating: 4,
            language: 'ASP.NET Web Forms'
        },
        {
            id: 10,
            rating: 3,
            language: 'ASP.NET Widows Forms'
        },
        {
            id: 10,
            rating: 4.5,
            language: 'Entity Framework and Ado.Net'
        },

        {
            id: 11,
            rating: 3.6,
            language: 'TFS and Git'
        },
         {
            id: 12,
            rating: 3.6,
            language: 'TypeScript'
        },
        {
            id: 13,
            rating: 1.5,
            language: 'Gulpjs'
        },
         {
             id: 14,
             rating: 1.5,
             language: 'Visual FoxPro'
         },



    ];
    // tslint:disable-next-line:max-line-length
    constructor(private renderer: Renderer, private title: Title, private aboutDataService: AboutDataService) {

        this.title.setTitle('About Me');
        // tslint:disable-next-line:max-line-length
        // this.meta.addTag({ name: 'Md Shahidullah', content:'This is Md Shahidulla; a self-learned person. I love coding and learning new technologies. Besides coding, I enjoy my time with my only son Mutasim Ali Adib, family and friends.'})
    }

    onDeactivate() {
       // this.renderer.setElementProperty(document.body, "scrollTop", 0);
    }
    ngOnInit(): void {
      this.isWelcome = true;
      this.blockUI.start();
     this.aboutDataService.getExperience()
     .subscribe(experiences => {this.Experiences = experiences; },
      err => console.log(err),
      () => this.blockUI.stop()
    );
    }
}
