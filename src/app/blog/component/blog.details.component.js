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
var ng_block_ui_1 = require("ng-block-ui");
var myGlobals = require("../../shared/globals");
var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent(blogDataService, route, router) {
        this.blogDataService = blogDataService;
        this.route = route;
        this.router = router;
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start();
        var Id = this.route.snapshot.params["Id"];
        this.blogDataService.getBlogPostDetails(Id)
            .subscribe(function (res) { _this.PostDetail = res; }, function (err) { return console.log(err); }, function () { return _this.blockUI.stop(); });
        this.pageUrl = window.location.href;
        this.pageIdentifier = Id;
    };
    BlogDetailsComponent.prototype.aboutMe = function () {
        this.router.navigate(['about']);
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], BlogDetailsComponent.prototype, "blockUI", void 0);
    BlogDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../template/blog.details.component.html?v=' + myGlobals.version,
            styleUrls: ['../css/blogdetails.css?v=' + myGlobals.version]
        }),
        __metadata("design:paramtypes", [blog_data_service_1.BlogDataService, router_1.ActivatedRoute, router_1.Router])
    ], BlogDetailsComponent);
    return BlogDetailsComponent;
}());
exports.BlogDetailsComponent = BlogDetailsComponent;
//# sourceMappingURL=blog.details.component.js.map