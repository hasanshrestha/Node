//import Boom from "@hapi/boom";

import { SuccessResponse } from '@src/helpers';
import {
  InputUserInterface,
  UserInterface,
  //UserRequestInterface,
} from '@src/interfaces';
import { UserService } from '@src/services';
import { NextFunction } from 'express';

class Guard {
  private static instance: Guard;

  private constructor() { }

  static get(): Guard {
    if (!Guard.instance) {
      Guard.instance = new Guard();
    }
    return Guard.instance;
  }

  auth = async (token: string): Promise<UserInterface | undefined> => {
    try {
      if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
      }
      const userExists = await new UserService().findOne({
        sub: verify.sub,
      });

      return SuccessResponse.send({
        message: contextValue.i18nProvider.__("administratorLogin.success"),
        data: {
          token: {
            access: access,
            refresh: refresh,
          },
          role: roleExists,
        },
      });
      
      if (!userExists) {
        throw new Error(`guard.auth.error`, {
          extensions: {
            code: 'UNAUTHENTICATED',
            argumentName: 'authorization',
            http: {
              status: 401,
            },
            data: {
              global: true,
              workspace: true,
            }
          },
        });
      }
      if (!userExists.emailVerified || !userExists.phoneNumberVerified) {
        return this.verifyUser(userExists.id, token);
      }
      return userExists;
    } catch (error: any) {
      if (error.failedAssertion) {
        return undefined;
      } else {
        throw new GraphQLError(`guard.auth.error`, {
          extensions: {
            code: 'UNAUTHENTICATED',
            argumentName: 'authorization',
            http: {
              status: 401,
            },
            data: {
              global: true,
              workspace: true,
            }
          },
        });
      }
    }
  };

//   private authBoom = async (token: string): Promise<UserInterface | undefined> => {
//     try {
//       const verify = await AwsCognito.verifyToken(token);
//       const userExists = await new UserService().findOne({
//         sub: verify.sub,
//       });
//       if (!userExists) {
//         throw Boom.unauthorized(`guard.auth.error`, token, {
//           message: `Token is invalid or user doesn't exits `,
//           path: "authorization",
//         });
//       }
//       if (!userExists.emailVerified || !userExists.phoneNumberVerified) {
//         return this.verifyUser(userExists.id, token);
//       }
//       return userExists;
//     } catch (error: any) {
//       if (error.failedAssertion) {
//         return undefined;
//       } else {
//         throw Boom.unauthorized(`guard.auth.error`, token, {
//           message: `Auth failed `,
//           path: "authorization",
//         });
//       }
//     }
//   };

//   public grantNext = async (req: UserRequestInterface, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization as string;
//     if (!token) {
//       throw Boom.unauthorized("guard.auth.error", token, {
//         message: "Auth failed",
//         path: "authorization",
//       });
//     }
//     const user = await this.authBoom(token.replace("Bearer ", ""));
//     if (!user) {
//       throw Boom.unauthorized(`guard.auth.error`, token, {
//         message: `Auth Failed`,
//         path: "authorization",
//       });
//     }
//     req.user = user;
//     next();
//   };

}

const guard = Guard.get();

export { guard as Guard };