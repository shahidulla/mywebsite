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
var ng_block_ui_1 = require("ng-block-ui");
var myGlobals = require("../../shared/globals");
var router_1 = require("@angular/router");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogDataService, renderer, router) {
        //  this.blogDataService.getUser()
        // .subscribe(users => this.users = users);
        this.blogDataService = blogDataService;
        this.renderer = renderer;
        this.router = router;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start();
        this.blogDataService.getBlogPostFromApi()
            .subscribe(function (posts) { _this.Posts = posts; }, function (err) { return console.log(err); }, function () { return _this.blockUI.stop(); });
    };
    BlogComponent.prototype.goToTop = function () {
        this.renderer.setElementProperty(document.body, "scrollTop", 0);
    };
    BlogComponent.prototype.aboutMe = function () {
        this.router.navigate(['about']);
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], BlogComponent.prototype, "blockUI", void 0);
    BlogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //templateUrl: 'blog.component.html?v='+myGlobals.version,
            templateUrl: '../template/blog.component.html?v=' + myGlobals.version,
            styleUrls: ['../css/blog.css?v=' + myGlobals.version]
        }),
        __metadata("design:paramtypes", [blog_data_service_1.BlogDataService, core_1.Renderer, router_1.Router])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map