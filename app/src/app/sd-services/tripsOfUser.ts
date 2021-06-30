/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class tripsOfUser {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_tripsOfUser

  async usersTrip(trip: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          trip: trip,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_f12rjlWAlV8BxRuW(bh);
      //appendnew_next_usersTrip
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xVdU2kQ9yWdRrrSC');
    }
  }

  async getTrips(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_a7AWiCrbwAJhLrm3(bh);
      //appendnew_next_getTrips
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JBTfZ2HrqLL02ksO');
    }
  }

  async getOneTrip(email: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          email: email,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_4FJaNgRkzvGjHBGH(bh);
      //appendnew_next_getOneTrip
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PvYSmt6RKoVgXsMI');
    }
  }

  //appendnew_flow_tripsOfUser_start

  async sd_f12rjlWAlV8BxRuW(bh) {
    try {
      bh.local.result = {};

      console.log(bh.input);
      bh = await this.sd_CKpKdjk3aX6AqFLO(bh);
      //appendnew_next_sd_f12rjlWAlV8BxRuW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f12rjlWAlV8BxRuW');
    }
  }

  async sd_CKpKdjk3aX6AqFLO(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addTripUser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.trip,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_CKpKdjk3aX6AqFLO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CKpKdjk3aX6AqFLO');
    }
  }

  async sd_a7AWiCrbwAJhLrm3(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getTrips/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_a7AWiCrbwAJhLrm3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a7AWiCrbwAJhLrm3');
    }
  }

  async sd_4FJaNgRkzvGjHBGH(bh) {
    try {
      bh.local.result = {};
      bh.input.query = {
        email: bh.input.email,
      };
      console.log(bh.input);

      bh = await this.sd_yUfz0TD86cJjb71U(bh);
      //appendnew_next_sd_4FJaNgRkzvGjHBGH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4FJaNgRkzvGjHBGH');
    }
  }

  async sd_yUfz0TD86cJjb71U(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getTrip/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: bh.input.query,
        body: bh.input.email,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_yUfz0TD86cJjb71U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yUfz0TD86cJjb71U');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_tripsOfUser_Catch
}
