import {Component, OnInit, Renderer} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Success} from '../models/success';
import { Title } from '@angular/platform-browser';
import { BlogDataService } from '../services/blog.data.service';

@Component({
  moduleId: module.id,
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    Success: Success;
    success = true;

    constructor(private formBuilder: FormBuilder,
        private renderer: Renderer, private title: Title, private blogDataService: BlogDataService) {
        this.title.setTitle('Contact Me');
    }

    formErrors = {
        FullName: '',
        Email: '',
        Message: ''
    };

    validationMessages = {
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
    }
    ngOnInit() {
    this.buildForm();

    }

    buildForm() {
        // build the form
        this.contactForm = this.formBuilder.group({
            FullName: ['', [ Validators.required, Validators.minLength(3)]],
            // tslint:disable-next-line:max-line-length
            Email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            Subject: [''],
            Message: ['', [Validators.required, Validators.minLength(10)]]

        });

        // watch for changes and validate

        this.contactForm.valueChanges.subscribe(data => {
            console.log(data);
           this.validateForm();

        });
    }

    validateForm() {
      // loop over the formErrors field names
        for (let field in this.formErrors) {
            this.formErrors[field] = '';

            // grab an input field by name
            let input = this.contactForm.get(field);
            if (input.invalid && input.dirty) {
                for (let error in input.errors)
                    this.formErrors[field] = this.validationMessages[field][error];
            }
        }

      }
    submitForm(userData: any): void {
        this.blogDataService.postVisitorMessage(userData);
        console.log(userData);
        this.contactForm.reset();
    }

    onDeactivate() {
        this.renderer.setElementProperty(document.body, 'scrollTop', 0);
    }
}
