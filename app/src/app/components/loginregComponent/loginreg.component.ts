/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { registerUser } from 'app/sd-services/registerUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-loginreg',
    templateUrl: './loginreg.template.html'
})

export class loginregComponent extends NBaseComponent implements OnInit {

    showLogin: boolean = true;

    registerForm: FormGroup;
    submitted: boolean = false;
    users: any[] = []

    loginForm: FormGroup;
    foundUser: boolean = false;


    constructor(private registerUserService: registerUser, private fb: FormBuilder, private matsnackbar: MatSnackBar, private router: Router) {
        super();
        this.buildForm();
        this.buildFormlog();
    }

    ngOnInit() {
        this.getUsers();
    }
    registerUser(form) {
        this.submitted = true;
        if (form.valid) {
            console.log(form);
            delete form.value.confpassword
            console.log(form.value);
            this.registerUserService.registerUser(form.value).then(res => {
                this.showLogin = true;
                this.getUsers();
                this.matsnackbar.open("User Stored Successfully", 'Close', {
                    duration: 2500
                });
            }, err => {
                this.matsnackbar.open("User not stored ", 'Close', {
                    duration: 2500
                });
            })        
        } else {
            this.matsnackbar.open("Fill in your Credetials", 'Close', {
                duration: 4500
            })
            alert('form is not valid')
        }
    }

    getUsers() {
        this.registerUserService.getUsers().then(res => {
            this.users = res.local.result;
            console.log(res);
        }, err => {
            this.matsnackbar.open("User not stored ", 'Close', {
                duration: 2500
            });
        })
    }

    buildForm() {
        this.registerForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]],
            confpassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]]
        })
    }


    login(form) {
        this.users.forEach(user => {
            if (form.value.email == user.email && form.value.password == user.password) {
                this.foundUser = true;
                this.router.navigate(['tripsadded']);
                sessionStorage.setItem("user", JSON.stringify(user))
                console.log(user)
            }
        })
        if (!this.foundUser) {
            this.matsnackbar.open("Incorrect Credetials", 'Close', {
                duration: 2500
            })
        }
        console.log(form.value);
    }

    buildFormlog() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z0-9])(?!.*[!\-`~() +=<>])(?=.*[@#$%^&*/]).{6,12}$/)]]
        })
    }



}