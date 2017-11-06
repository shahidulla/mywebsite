import { Component, OnInit, Renderer } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import {  Router } from '@angular/router';
import { TruncatePipe } from '../../pipes/trunc.pipe';
import { Title } from '@angular/platform-browser';
@
Component({
    moduleId: module.id,
    templateUrl: '../template/projects.component.html',
    styleUrls: ['../css/projects.component.css']
})

export class ProjectsComponent implements OnInit {

    projects: Project[];

    constructor(private  projectService: ProjectService, public router: Router,  private renderer: Renderer, private title: Title) {
        this.title.setTitle('My projects');
    }

    chooseProject(project) {
        this.router.navigate(['project/detail', project.id]);
    }

    ngOnInit() {
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }

    onDeactivate() {
        this.renderer.setElementProperty(document.body, 'scrollTop', 0);
    }
}
