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
var myGlobals = require("../shared/globals");
var platform_browser_1 = require("@angular/platform-browser");
var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(renderer, title) {
        this.renderer = renderer;
        this.title = title;
        this.experiences = [
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
        this.title.setTitle('About Me');
        //this.meta.addTag({ name: 'Md Shahidullah', content:'This is Md Shahidulla; a self-learned person. I love coding and learning new technologies. Besides coding, I enjoy my time with my only son Mutasim Ali Adib, family and friends.'})
    }
    AboutMeComponent.prototype.onDeactivate = function () {
        this.renderer.setElementProperty(document.body, "scrollTop", 0);
    };
    AboutMeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'about.component.html?v=' + myGlobals.version,
            styleUrls: ['about.css?v=' + myGlobals.version]
        }),
        __metadata("design:paramtypes", [core_1.Renderer, platform_browser_1.Title])
    ], AboutMeComponent);
    return AboutMeComponent;
}());
exports.AboutMeComponent = AboutMeComponent;
//# sourceMappingURL=about.component.js.map