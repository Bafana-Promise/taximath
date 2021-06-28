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
export class formValueDatabase {
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
    this.serviceName = 'formValueDatabase';
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
      instance = new formValueDatabase(
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
      //appendnew_flow_formValueDatabase_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: formValueDatabase');

    //appendnew_flow_formValueDatabase_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: formValueDatabase');

    if (!this.swaggerDocument['paths']['/adduser']) {
      this.swaggerDocument['paths']['/adduser'] = {
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
      this.swaggerDocument['paths']['/adduser']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/adduser`,
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
          bh = await this.sd_V7Ko786CBv3TmngC(bh);
          //appendnew_next_sd_hqeUsTPC9KLvJgLA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hqeUsTPC9KLvJgLA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getUsers']) {
      this.swaggerDocument['paths']['/getUsers'] = {
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
      this.swaggerDocument['paths']['/getUsers']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getUsers`,
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
          bh = await this.sd_FOkPWGiP9QKbJnKe(bh);
          //appendnew_next_sd_QWpjuQ1rC7WYrrZN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QWpjuQ1rC7WYrrZN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_formValueDatabase_HttpIn
  }
  //   service flows_formValueDatabase

  //appendnew_flow_formValueDatabase_start

  async sd_V7Ko786CBv3TmngC(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_uvyVN2fYfNYMS47U',
        'users',
        bh.input.body,
        {}
      );
      await this.sd_KDU6pBlkXH8KKxUM(bh);
      //appendnew_next_sd_V7Ko786CBv3TmngC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V7Ko786CBv3TmngC');
    }
  }

  async sd_KDU6pBlkXH8KKxUM(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KDU6pBlkXH8KKxUM');
    }
  }

  async sd_FOkPWGiP9QKbJnKe(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_uvyVN2fYfNYMS47U',
        'users',
        bh.input.query,
        {}
      );
      await this.sd_WRl4ip6tMeeSaINK(bh);
      //appendnew_next_sd_FOkPWGiP9QKbJnKe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FOkPWGiP9QKbJnKe');
    }
  }

  async sd_WRl4ip6tMeeSaINK(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WRl4ip6tMeeSaINK');
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
  //appendnew_flow_formValueDatabase_Catch
}
