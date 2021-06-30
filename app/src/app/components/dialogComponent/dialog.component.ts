/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tripsOfUser } from 'app/sd-services/tripsOfUser';
import { commonService } from 'app/services/common/common.service';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-dialog',
    templateUrl: './dialog.template.html'
})

export class dialogComponent extends NBaseComponent implements OnInit {
    formValue: FormGroup;
    tripObj: any = {};
    minDate = new Date();
    submitted = false;
    usersTrip = {};
    loggedInUser: any = {};

    constructor(public dialogRef: MatDialogRef<dialogComponent>, private fb: FormBuilder,
        private matsnackbar: MatSnackBar, private tripsService: tripsOfUser,private commonservice: commonService) {
        super();
        this.buildForm();
    }

    ngOnInit() {
     this.loggedInUser = this.commonservice.getUser()
    }

    addTrip(form) {
        this.submitted = true;
        if (form.valid) {
            console.log(form);
            console.log(form.value);
            let data = form.value;
            data['email'] = this.loggedInUser['email'];
                this.tripsService.usersTrip(data).then(res => {
                    console.log(res);
                    this.matsnackbar.open("Trip Stored Successfully", 'Close', {
                        duration: 2500
                    });
                }, err => {
                    this.matsnackbar.open("Trip not stored ", 'Close', {
                        duration: 2500
                    });
                })
            window.location.reload()
        } else {
            this.matsnackbar.open("Fill in your Detials", 'Close', {
                duration: 4500
            });
        }
    }

    buildForm() {
        this.formValue = this.fb.group({
            currentlocation: ['', [Validators.required, Validators.pattern(/^[ a-zA-Z]+$/)]],
            to: ['', [Validators.required, Validators.pattern(/^[ a-zA-Z]+$/)]],
            amount: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
            currentDate: ['', [Validators.required]],
        })
    }


}
