"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_service_1 = require("../../services/project.service");
var router_1 = require("@angular/router");
var myGlobals = require("../../shared/globals");
var platform_browser_1 = require("@angular/platform-browser");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService, router, renderer, title) {
        this.projectService = projectService;
        this.router = router;
        this.renderer = renderer;
        this.title = title;
        this.title.setTitle('My projects');
    }
    ProjectsComponent.prototype.chooseProject = function (project) {
        this.router.navigate(['project/detail', project.id]);
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent.prototype.onDeactivate = function () {
        this.renderer.setElementProperty(document.body, "scrollTop", 0);
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../template/projects.html?v=' + myGlobals.version,
            styleUrls: ['../css/projects.css?v=' + myGlobals.version],
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService, router_1.Router, core_1.Renderer, platform_browser_1.Title])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map