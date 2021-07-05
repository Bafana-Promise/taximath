let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class tripValueDatabase {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'tripValueDatabase';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new tripValueDatabase(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_tripValueDatabase_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: tripValueDatabase');

    //appendnew_flow_tripValueDatabase_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: tripValueDatabase');

    if (!this.swaggerDocument['paths']['/addTripUser']) {
      this.swaggerDocument['paths']['/addTripUser'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addTripUser']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addTripUser`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_C0L8OdykZpcS29Mg(bh);
          //appendnew_next_sd_nKqK5xBBcRjr17UH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nKqK5xBBcRjr17UH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getTrips']) {
      this.swaggerDocument['paths']['/getTrips'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getTrips']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getTrips`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_BEe0nXK2xv3FAfEN(bh);
          //appendnew_next_sd_P7fbim5vFePBiO4a
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_P7fbim5vFePBiO4a');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getTrip']) {
      this.swaggerDocument['paths']['/getTrip'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getTrip']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getTrip`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_gAgpKoOZwm24SQ0q(bh);
          //appendnew_next_sd_QzbGsL59QNuLjIz0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QzbGsL59QNuLjIz0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteTrip/{id}']) {
      this.swaggerDocument['paths']['/deleteTrip/{id}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteTrip/{id}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteTrip/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_3FbuGDhQyOyNiuju(bh);
          //appendnew_next_sd_fXHiXhkKQxWBKu9g
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fXHiXhkKQxWBKu9g');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_tripValueDatabase_HttpIn
  }
  //   service flows_tripValueDatabase

  //appendnew_flow_tripValueDatabase_start

  async sd_C0L8OdykZpcS29Mg(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_uvyVN2fYfNYMS47U',
        'trips',
        bh.input.body,
        {}
      );
      await this.sd_FSHg0sE6ZM1wkdTX(bh);
      //appendnew_next_sd_C0L8OdykZpcS29Mg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C0L8OdykZpcS29Mg');
    }
  }

  async sd_FSHg0sE6ZM1wkdTX(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FSHg0sE6ZM1wkdTX');
    }
  }

  async sd_BEe0nXK2xv3FAfEN(bh) {
    try {
      console.log(bh);
      bh = await this.sd_JPyBV3ypK4SxPa4B(bh);
      //appendnew_next_sd_BEe0nXK2xv3FAfEN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BEe0nXK2xv3FAfEN');
    }
  }

  async sd_JPyBV3ypK4SxPa4B(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_uvyVN2fYfNYMS47U',
        'trips',
        bh.input.query,
        {}
      );
      bh = await this.sd_mFzXEzUg1FdxcG4X(bh);
      //appendnew_next_sd_JPyBV3ypK4SxPa4B
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JPyBV3ypK4SxPa4B');
    }
  }

  async sd_mFzXEzUg1FdxcG4X(bh) {
    try {
      console.log(bh);
      await this.sd_nPQP2mvgYRXzmpn6(bh);
      //appendnew_next_sd_mFzXEzUg1FdxcG4X
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mFzXEzUg1FdxcG4X');
    }
  }

  async sd_nPQP2mvgYRXzmpn6(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nPQP2mvgYRXzmpn6');
    }
  }

  async sd_gAgpKoOZwm24SQ0q(bh) {
    try {
      console.log(bh);

      bh = await this.sd_hkllIUE3XBADZlYV(bh);
      //appendnew_next_sd_gAgpKoOZwm24SQ0q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gAgpKoOZwm24SQ0q');
    }
  }

  async sd_hkllIUE3XBADZlYV(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_uvyVN2fYfNYMS47U',
        'trips',
        bh.input.query,
        {}
      );
      bh = await this.sd_o3o5tQ0UT8dfSX5L(bh);
      //appendnew_next_sd_hkllIUE3XBADZlYV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hkllIUE3XBADZlYV');
    }
  }

  async sd_o3o5tQ0UT8dfSX5L(bh) {
    try {
      console.log(bh);
      await this.sd_NT0jO7gHW7qov92t(bh);
      //appendnew_next_sd_o3o5tQ0UT8dfSX5L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o3o5tQ0UT8dfSX5L');
    }
  }

  async sd_NT0jO7gHW7qov92t(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NT0jO7gHW7qov92t');
    }
  }

  async sd_3FbuGDhQyOyNiuju(bh) {
    try {
      console.log(bh);
      const ObjectId = require('mongodb').ObjectId;

      bh.filter = { _id: ObjectId(bh.input.params.id) };

      console.log(bh.filter);

      bh = await this.sd_LEOTZ5dQU49dqyzs(bh);
      //appendnew_next_sd_3FbuGDhQyOyNiuju
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3FbuGDhQyOyNiuju');
    }
  }

  async sd_LEOTZ5dQU49dqyzs(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_uvyVN2fYfNYMS47U',
        'trips',
        bh.filter,
        {}
      );
      bh = await this.sd_aUF6QStv7ljGjh9f(bh);
      //appendnew_next_sd_LEOTZ5dQU49dqyzs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LEOTZ5dQU49dqyzs');
    }
  }

  async sd_aUF6QStv7ljGjh9f(bh) {
    try {
      console.log(bh);
      await this.sd_yaBJg09Gy0ZsF4v9(bh);
      //appendnew_next_sd_aUF6QStv7ljGjh9f
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aUF6QStv7ljGjh9f');
    }
  }

  async sd_yaBJg09Gy0ZsF4v9(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yaBJg09Gy0ZsF4v9');
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
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_tripValueDatabase_Catch
}
