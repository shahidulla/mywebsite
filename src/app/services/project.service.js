"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var projects_1 = require("../models/projects");
var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.projectPromise = Promise.resolve(projects_1.ourProjects);
    }
    ProjectService.prototype.getProjects = function () {
        return this.projectPromise;
    };
    ProjectService.prototype.getOneProject = function (id) {
        return this.projectPromise
            .then(function (project) { return project.find(function (project) { return project.id === +id; }); });
    };
    ProjectService = __decorate([
        core_1.Injectable()
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map