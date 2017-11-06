"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var error_component_1 = require("../error/error.component");
exports.appRoutes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'blog', loadChildren: 'app/modules/blog.module#BlogModule' },
    { path: 'contact', loadChildren: 'app/modules/contact.module#ContactModule' },
    { path: 'project', loadChildren: 'app/modules/project.module#ProjectModule' },
    { path: '**', component: error_component_1.ErrorComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(exports.appRoutes, { useHash: true });
//# sourceMappingURL=routes.js.map