const jwt = require("jsonwebtoken");
const { user, role, setting } = require("@models");

import { UserInterface } from '@src/interfaces';
import { UserService } from '@src/services';
import { Request, Response, NextFunction } from 'express';


class Guard {
    private static instance: Guard;
  
    private constructor() { }
  
    static get(): Guard {
      if (!Guard.instance) {
        Guard.instance = new Guard();
      }
      return Guard.instance;
    }

    private auth = async (token: string): Promise<UserInterface | undefined> => {
      try {
        const userExists = await new UserService().findByPk(1);      //GET ID AFTER DECODING TOKEN 
        if (!userExists) {
          throw Boom.unauthorized(`Auth failed`, token, {
            message: `Token is invalid or user doesn't exits `,
            path: "authorization",
          });
        }
        // if (!userExists.emailVerified || !userExists.phoneNumberVerified) {
        //   return this.verifyUser(userExists.id, token);
        // }
        return userExists;
      } catch (error: any) {
          throw Boom.unauthorized(`Auth failed`, token, {
            message: `Auth failed `,
            path: "authorization",
          });
      }
    };
  
    public grantNext = async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization as string;
      if (!token) {
        throw Boom.unauthorized("Auth failed", token, {
          message: "Auth failed",
          path: "authorization",
        });
      }
      const user = await this.auth(token.replace("Bearer ", ""));
      if (!user) {
        throw Boom.unauthorized(`Auth failed`, token, {
          message: `Auth Failed`,
          path: "authorization",
        });
      }
      req.user = user;
      next();
    };
  
}
  
const guard = Guard.get();
  
export { guard as Guard };


const auth = async (req, res, next) => {
  const token = req?.header("Authorization")
    ? req?.header("Authorization")?.replace("Bearer ", "")
    : req.cookies["access-token"];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Your Token Is Expired." });
    }

    const userData = await user.findOne({
      where: { id: decoded.id },
    });
    
    req.user = decoded;
    next();
  } 
  catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = auth;
