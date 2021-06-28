/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    tripObj:any = {};

    constructor(public dialogRef: MatDialogRef<dialogComponent> , private fb: FormBuilder, private matsnackbar: MatSnackBar) {
        super();
        this.buildForm();
    }

    ngOnInit() {

    }

    addTrip(form){
        this.tripObj = form.value;
        console.log(form.value);
        this.dialogRef.close(this.tripObj);
    }

        buildForm() {
        this.formValue = this.fb.group({
            currentlocation: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            to: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
            amount: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
            currentDate: ['', [Validators.required, Validators.pattern(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)]],
        })
    }

}
