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
export class registerUser {
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

  //   service flows_registerUser

  async registerUser(form: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dtaSNOv2wvPB4F8c(bh);
      //appendnew_next_registerUser
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
      return await this.errorHandler(bh, e, 'sd_Z9UjSM7Q5kAHuB0A');
    }
  }

  async getUsers(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_CGwSTANOfxtz6Tnz(bh);
      //appendnew_next_getUsers
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
      return await this.errorHandler(bh, e, 'sd_3n1bymUGaUJA9p7H');
    }
  }

  //appendnew_flow_registerUser_start

  async sd_dtaSNOv2wvPB4F8c(bh) {
    try {
      bh.local.result = {};

      console.log(bh.input);
      bh = await this.sd_sa6cdlDGAkxpzg0D(bh);
      //appendnew_next_sd_dtaSNOv2wvPB4F8c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dtaSNOv2wvPB4F8c');
    }
  }

  async sd_sa6cdlDGAkxpzg0D(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `adduser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_sa6cdlDGAkxpzg0D
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sa6cdlDGAkxpzg0D');
    }
  }

  async sd_CGwSTANOfxtz6Tnz(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getUsers/`;
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
      //appendnew_next_sd_CGwSTANOfxtz6Tnz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CGwSTANOfxtz6Tnz');
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
  //appendnew_flow_registerUser_Catch
}
