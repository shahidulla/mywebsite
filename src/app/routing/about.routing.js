"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("../about/about.component");
var aboutRoutes = ([
    {
        path: 'about',
        children: [
            { path: '', component: about_component_1.AboutMeComponent }
        ]
    }
]);
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map