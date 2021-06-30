/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dialogComponent } from '../dialogComponent/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { tripsOfUser } from 'app/sd-services/tripsOfUser';
import { commonService } from 'app/services/common/common.service';
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
    selector: 'bh-tripsadded',
    templateUrl: './tripsadded.template.html'
})

export class tripsaddedComponent extends NBaseComponent implements OnInit {
    cardObj;
    departFromServer;
    destinationFromServer;
    amountFromServer;
    dateFromServer;

    usersTrip;
    loggedInUser;
    oneUserTrip;

    constructor(private matsnackbar: MatSnackBar, private dialog: MatDialog, private tripsService: tripsOfUser, private commonservice: commonService, private router: Router) {
        super();
    }

    ngOnInit() {
        this.loggedInUser = this.commonservice.getUser()
        // this.getTripsFromServer();
        this.showCard();
        this.getTrip();
        if (!this.commonservice.getUser()) {
            this.matsnackbar.open("You're not Logged In", 'Close', {
                duration: 4500
            });
            this.router.navigate(["loginreg"]);
        }
    }

    getTripsFromServer() {
        this.tripsService.getTrips().then(res => {
            this.usersTrip = res.local.result;
            console.log(this.loggedInUser)
            console.log(this.usersTrip);
        }, err => {
            this.matsnackbar.open("Trip not stored ", 'Close', {
                duration: 2500
            });
        })
    }

    showCard() {
        this.cardObj = this.usersTrip;
        console.log(this.usersTrip);
    }

    // openDialog() {
    // this.dialog.open(dialogComponent, {
    //         width: '390px',
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //         console.log(result);
    //     });

    // }
  openRegDialog() {
    //open register dialog
    this.dialog.open(dialogComponent,{width: '390px',}).afterClosed().subscribe(result => {
        console.log(result)
        console.log('The dialog was closed');
    })
  };

    logout() {
        sessionStorage.clear()
        this.router.navigate(["loginreg"])
    };

    getTrip(){
        this.tripsService.getOneTrip(this.loggedInUser.email).then(res =>{
            this.oneUserTrip = res.local.result
            console.log(this.oneUserTrip)
        })

    }

}
