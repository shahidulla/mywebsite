import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/interface/project-interface';
import { Title } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    templateUrl: '../template/detail.component.html',
    styleUrls: ['../css/detail.component.css']
})

export class DetailComponent implements OnInit {
    project: Project;

    // tslint:disable-next-line:max-line-length
    constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService, private renderer: Renderer, private title: Title) {
        this.title.setTitle('Project details');
    }

    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
      //  this.projectService.getOneProject(id).then(project => this.project = project);
    }

    onDeactivate() {
        this.renderer.setElementProperty(document.body, 'scrollTop', 0);
    }

    backToList() {
        this.router.navigate(['project']);
    }
}
