/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dialogComponent } from '../dialogComponent/dialog.component';
import { MatDialog } from '@angular/material/dialog';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-tripsadded',
    templateUrl: './tripsadded.template.html'
})

export class tripsaddedComponent extends NBaseComponent implements OnInit {
    ObjValueFromDialog: any= [];

    constructor(private matsnackbar: MatSnackBar, private dialog: MatDialog) {
        super();
    }

    ngOnInit() {
    }

    openDialog() {
        this.dialog.open(dialogComponent).afterClosed().subscribe(result => {
            this.ObjValueFromDialog.push(result);
            console.log(result)
            console.log(this.ObjValueFromDialog);
            console.log(result);
        });
        console.log("Dialog Works");
        this.matsnackbar.open("Dialog Works", 'Close', {
            duration: 9500
        });
    }



}

//   openRegDialog() {
//     //open register dialog
//     this.dialog.open(RegdialogComponent).afterClosed().subscribe(result => {
//       // check if with the entered ID exist
//       // we need to push the class object into the student class array
//       if (result) {
//         //if it's true return the selected
//         this.student.classes.registered.push(result);
//         localStorage.setItem("student", JSON.stringify(this.student))

//         this.refreshData();

//       }
//     })
//   }