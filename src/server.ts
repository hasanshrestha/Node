// import 'colors';
// import cors, { CorsOptions } from 'cors';
// import express from 'express';
// import http, { IncomingMessage } from 'http';
// //import loglevel from 'loglevel';
// import 'module-alias/register';

// //import i18nProvider from './config/i18nProvider';
// import {
//   Database,
//   corsWhitelist,
//   environment,
//   port
// } from '@src/config';
// import { EnvironmentEnum } from '@src/enums';
// //import { schema } from '@src/graphql/schema';
// import { ContextInterface, UserInterface } from '@src/interfaces';
// import { Guard } from '@src/middlewares';
// //import { ProxyRouter as PrivateProxyRouter } from '@src/api/routes/v1/private';
// //import { optionsSwaggerUI, swaggerSpec } from "@src/utils";
// //import swaggerUI from "swagger-ui-express";
// import bodyParser from 'body-parser';
// //import { expressMiddleware } from "@apollo/server/express4"

// class Server {
//   app: express.Application;
//   //logger: loglevel.Logger;

//   constructor() {
//     this.app = express();
//     //this.logger = loglevel.getLogger('apollo-server');
//   }

//   private async connectDB() {
//     try {
//       await Promise.all([
//         Database.connection()
//       ]);
//     } catch (error: any) {
//       throw new Error(error);
//     }
//   }

//   public async start() {
//     //this.logger.setLevel(environment === EnvironmentEnum.production ? loglevel.levels.INFO : loglevel.levels.DEBUG);
//     this.connectDB();
//     this.configuration();

//     const server = http.createServer(this.app)
//     //await server.start();

//     // this.app.use("/graphql",
//     //   cors<cors.CorsRequest>({ origin: corsWhitelist }),
//     //   bodyParser.json(),
//     //   expressMiddleware(server, {
//     //     context: async ({ req }: { req: IncomingMessage }): Promise<ContextInterface> => {
//     //       const authorization = req.headers.authorization as string;
//     //       // const secret = req.headers?.['x-workspace-secret-id'] as string;
//     //       // const clientIp = req.headers?.['x-request-ip'] as string;
//     //       // const deviceId = req.headers?.['x-device-id'] as string;
//     //       // const userAgent = req.headers?.['user-agent'] as string
//     //       // const browser = req.headers?.['sec-ch-ua'] as string;
//     //       // const isMobile = req.headers?.['sec-ch-ua-mobile'] as string;
//     //       // const platform = req.headers?.['sec-ch-ua-platform'] as string;
//     //       //const language = req.headers?.['accept-language'] as string | undefined;

//     //     //   if (language) {
//     //     //     i18nProvider.setLocale(language);
//     //     //   }

//     //     //let userWorkspace: UserWorkspaceInterface | undefined;
//     //     let user: UserInterface | undefined;
//     //     if (authorization) {
//     //       user = await Guard.auth(authorization.replace('Bearer ', ''));
//     //     }
//     //     // if (user && secret) {
//     //     //   userWorkspace = await Guard.checkWorkspace({ user, secret });
//     //     // }
//     //     return {
//     //       user,
//     //       authorization,
//     //       // userWorkspace,
//     //       // clientIp,
//     //       // deviceId,
//     //       // userAgent,
//     //       // browser,
//     //       // isMobile,
//     //       // platform,
//     //       // i18nProvider
//     //     };
//     //     }
//     //   })
//     // );

//     this.app.use(bodyParser.json());
//     this.app.use(bodyParser.urlencoded({ extended: true }));

//     // API Routes
//     //this.app.use("/transliterate/private/v1", PrivateProxyRouter.map());

//     // Swagger
//     // if (environment !== EnvironmentEnum.production) {
//     //   this.app.get("/transliterate/swagger.json", (req, res) => {
//     //     res.setHeader("Content-Type", "application/json");
//     //     res.send(swaggerSpec);
//     //   });
//     //   this.app.use("/transliterate/swagger", swaggerUI.serve);
//     //   this.app.get("/transliterate/swagger", swaggerUI.setup(swaggerSpec, optionsSwaggerUI));
//     // }

//     await new Promise<void>((resolve) => {
//       const port = this.app.get("port");
//       server.listen({ port: port }, resolve);
//       console.info(`Server ready at: http://localhost:${port}`);
//     });
//   }

//   private configuration() {
//     //this.app.use(i18nProvider.init);
//     this.app.set('port', port);
//     this.app.use(cors(this.corsOptions));
//   }

//   private corsOptions: CorsOptions = {
//     origin: function (origin, callback) {
//       if (!origin || corsWhitelist.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(
//           new Error('Not allowed by CORS'),
//         );
//       }
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   };
// }


// const server = new Server();
// server.start();
