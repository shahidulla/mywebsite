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
var forms_1 = require("@angular/forms");
var toastr_service_1 = require("../services/toastr.service");
var myGlobals = require("../shared/globals");
var platform_browser_1 = require("@angular/platform-browser");
var blog_data_service_1 = require("../services/blog.data.service");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, renderer, toasterservice, title, blogDataService) {
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.toasterservice = toasterservice;
        this.title = title;
        this.blogDataService = blogDataService;
        this.success = true;
        this.formErrors = {
            FullName: '',
            Email: '',
            Message: ''
        };
        this.validationMessages = {
            FullName: {
                required: 'Full name is required',
                minlength: 'Full name should be at least 3 characters'
            },
            Email: {
                required: 'Email is required',
                pattern: 'Please enter the valid email address'
            },
            Message: {
                required: 'Message is required',
                minlength: 'Message should be at least 10 characters'
            }
        };
        this.title.setTitle('Contact Me');
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ContactComponent.prototype.buildForm = function () {
        var _this = this;
        // build the form
        this.contactForm = this.formBuilder.group({
            FullName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            Email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            Subject: [''],
            Message: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]]
        });
        // watch for changes and validate
        this.contactForm.valueChanges.subscribe(function (data) {
            console.log(data);
            _this.validateForm();
        });
    };
    ContactComponent.prototype.validateForm = function () {
        // loop over the formErrors field names
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            // grab an input field by name
            var input = this.contactForm.get(field);
            if (input.invalid && input.dirty) {
                for (var error in input.errors)
                    this.formErrors[field] = this.validationMessages[field][error];
            }
        }
    };
    ContactComponent.prototype.submitForm = function (userData) {
        this.blogDataService.postVisitorMessage(userData);
        console.log(userData);
        this.contactForm.reset();
    };
    ContactComponent.prototype.onDeactivate = function () {
        this.renderer.setElementProperty(document.body, "scrollTop", 0);
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'contact.component.html?v=' + myGlobals.version,
            styleUrls: ['contact.css?v=' + myGlobals.version]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            core_1.Renderer, toastr_service_1.ToastrService, platform_browser_1.Title, blog_data_service_1.BlogDataService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map