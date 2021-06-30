/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    selector: 'bh-taxicalc',
    templateUrl: './taxicalc.template.html'
})

export class taxicalcComponent extends NBaseComponent implements OnInit {
    taxiCalcForm: FormGroup;
    multpliedNum;
    result;
    moneyShort;

    errorMassege;

    constructor(private fb: FormBuilder, private matsnackbar: MatSnackBar) {
        super();
        this.buildForm();
    }

    ngOnInit() {

    }

    calculate(form) {
        this.multpliedNum = form.value.taxiFare * form.value.numOfPassenders
        if (form.value.amountRec <= 200) {
            console.log(this.multpliedNum)
            this.result = form.value.amountRec - this.multpliedNum

            console.log(this.result);
            if ((form.value.taxiFare * form.value.numOfPassenders) <= form.value.amountRec) {
                console.log(this.result)
            }
        }
        this.getChange(this.result)
        if (form.value.amountRec < this.multpliedNum) {
            this.moneyShort = 'Money is less R' + (this.multpliedNum - form.value.amountRec)
            console.log(this.moneyShort)
            this.matsnackbar.open(`${this.moneyShort}`, 'Close', {
                duration: 9000
            })
            return;
        }
        else {
            this.errorMassege = "Not more than R200 is Allowed";
             this.matsnackbar.open('sorry', 'Close', {
                duration: 9000
            })
        }
    }

    buildForm() {
        this.taxiCalcForm = this.fb.group({
            taxiFare: [Number, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
            numOfPassenders: [Number, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
            amountRec: [Number, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        })
    }

    getChange(num) {
        if (num < 0) {
            return 0;
        }else{
            return num;
        }
    }
    //   onSubmit() {
    //     if (this.formValue.moneyRece <= 200) {
    //       this.multply = this.formValue.taxifare * this.formValue.people
    //       this.result = this.formValue.moneyRece - this.multply
    //       if ((this.formValue.taxifare * this.formValue.people) <= this.formValue.moneyRece) {
    //         return this.result
    //       }
    //     }
    //     else if (this.formValue.moneyRece < this.multply) {
    //       this.moneyShort = "Money is less R" + (this.multply - this.formValue.moneyRece)
    //       return alert(this.moneyShort)
    //     }
    //     else {
    //       this.errorMassege = "Not more than R200 is Allowed";
    //       return alert(this.errorMassege);
    //     }
    //   }


}
