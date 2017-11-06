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
var blog_data_service_1 = require("../../services/blog.data.service");
var router_1 = require("@angular/router");
var myGlobals = require("../../shared/globals");
var BlogTagComponent = /** @class */ (function () {
    function BlogTagComponent(blogDataService, route) {
        this.blogDataService = blogDataService;
        this.route = route;
    }
    BlogTagComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = this.route.snapshot.params["Id"];
        this.subscription = this.blogDataService.getBlogPostOnTag(Id)
            .subscribe(function (posts) { return _this.Posts = posts; });
        //this.subscription.unsubscribe();
    };
    BlogTagComponent.prototype.ngOnChanges = function () {
        this.subscription.unsubscribe();
    };
    BlogTagComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BlogTagComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../template/blog.component.html?v=' + myGlobals.version,
            styleUrls: ['../css/blog.css?v=' + myGlobals.version]
        }),
        __metadata("design:paramtypes", [blog_data_service_1.BlogDataService, router_1.ActivatedRoute])
    ], BlogTagComponent);
    return BlogTagComponent;
}());
exports.BlogTagComponent = BlogTagComponent;
//# sourceMappingURL=blog.tag.component.js.map