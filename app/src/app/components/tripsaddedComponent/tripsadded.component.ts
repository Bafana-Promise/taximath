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

    usersTrip:any =[];
    loggedInUser;
    oneUserTrip: any =[];

    constructor(private matsnackbar: MatSnackBar, private dialog: MatDialog, private tripsService: tripsOfUser, private commonservice: commonService, private router: Router) {
        super();
    }

    ngOnInit() {
        this.loggedInUser = this.commonservice.getUser()

        if (!this.commonservice.getUser()) {
            console.log("hi hello")
            this.matsnackbar.open("You're not Logged In", 'Close', {
                duration: 4500
            });
            this.router.navigate(["loginreg"]);
        }
        this.getTrip();
        this.getTripsFromServer()
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

    openRegDialog() {
        this.dialog.open(dialogComponent, { width: '390px', }).afterClosed().subscribe(result => {
            console.log(result)
            result['email'] = this.loggedInUser['email'];
            this.tripsService.usersTrip(result).then(res => {
                console.log(res);
                this.getTrip()
                this.matsnackbar.open("Trip Stored Successfully", 'Close', {
                    duration: 2500
                });
            }, err => {
                this.matsnackbar.open("Trip not stored ", 'Close', {
                    duration: 2500
                });
            })

            console.log('The dialog was closed');
        })

    };

    getTrip() {
        this.tripsService.getOneTrip(this.loggedInUser.email).then(res => {
            this.oneUserTrip = res.local.result
            console.log(res)
        })
    }

    logout() {
        sessionStorage.clear()
        this.router.navigate(["loginreg"])
    };
    
    deleteTrip(id) {
        console.log(id)

        this.tripsService.removeTrip(id).then(res => {
            console.log(res);
            this.getTrip()
        })
            ;

    }

    addTrip(form) {
        this.submitted = true;
        if (form.valid) {
            console.log(form);
            console.log(form.value);
            this.loggedInUser = this.commonservice.getUser()
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
        } else {
            this.matsnackbar.open("Fill in your Detials", 'Close', {
                duration: 4500
            });
        }
    }

}
