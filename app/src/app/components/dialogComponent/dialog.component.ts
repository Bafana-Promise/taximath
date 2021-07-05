/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialogRef, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    loggedUser;

    constructor(public dialogRef: MatDialogRef<dialogComponent>, private fb: FormBuilder,
        private matsnackbar: MatSnackBar, private tripsService: tripsOfUser, private commonservice: commonService, @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
        this.buildForm();
    }

    ngOnInit() {
        this.loggedUser = this.commonservice.getUser()

        if (!this.commonservice.getUser()) {
            console.log("hi hello")
            this.matsnackbar.open("You're not Logged In", 'Close', {
                duration: 4500
            });
            this.router.navigate(["loginreg"]);
        }
        console.log(this.data)
        this.loggedUser = this.commonservice.getUser()



    }

    addTrip(form) {
        this.submitted = true;
        if (!form.valid) {
            return false
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
