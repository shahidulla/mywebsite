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
var router_1 = require("@angular/router");
var project_service_1 = require("../../services/project.service");
var myGlobals = require("../../shared/globals");
var platform_browser_1 = require("@angular/platform-browser");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, projectService, renderer, title) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.renderer = renderer;
        this.title = title;
        this.title.setTitle('Project details');
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.projectService.getOneProject(id).then(function (project) { return _this.project = project; });
    };
    DetailComponent.prototype.onDeactivate = function () {
        this.renderer.setElementProperty(document.body, "scrollTop", 0);
    };
    DetailComponent.prototype.backToList = function () {
        this.router.navigate(['project']);
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../template/detail.html?v=' + myGlobals.version,
            styleUrls: ['../css/detail.css?v=' + myGlobals.version],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, project_service_1.ProjectService, core_1.Renderer, platform_browser_1.Title])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map