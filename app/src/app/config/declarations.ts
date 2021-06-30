import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-commonService
import { commonService } from '../services/common/common.service';
//CORE_REFERENCE_IMPORT-dialogComponent
import { dialogComponent } from '../components/dialogComponent/dialog.component';
//CORE_REFERENCE_IMPORT-tripsaddedComponent
import { tripsaddedComponent } from '../components/tripsaddedComponent/tripsadded.component';
//CORE_REFERENCE_IMPORT-loginregComponent
import { loginregComponent } from '../components/loginregComponent/loginreg.component';
//CORE_REFERENCE_IMPORT-taxicalcComponent
import { taxicalcComponent } from '../components/taxicalcComponent/taxicalc.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogComponent
dialogComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tripsaddedComponent
tripsaddedComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginregComponent
loginregComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-taxicalcComponent
taxicalcComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-commonService
commonService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'taxicalc', component: taxicalcComponent},{path: 'loginreg', component: loginregComponent},{path: 'tripsadded', component: tripsaddedComponent},{path: 'dialog', component: dialogComponent},{path: '', redirectTo: 'loginreg', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
