import * as dotenv from 'dotenv';
import * as sequelize from 'sequelize';
import * as process from "process";

import { EnvironmentEnum, SortEnum } from '@src/enums';


const mustExist = <T>(value: T | undefined, name: string): T => {
    if (!value) {
        console.error(`Missing Config: ${name} !!!`);
        process.exit(1);
      }
    return value;
};


dotenv.config();


/**
 * Your favorite port
 */
export const port = mustExist(parseInt(process.env.PORT!) as number, "PORT"),

  /**
   * Application mode (Set the environment to 'development' by default)
   */
  environment = mustExist(process.env.ENVIRONMENT || (EnvironmentEnum.development as EnvironmentEnum), "ENVIRONMENT"),
  /**
   * Database Connection
   */
  db = {
    username: mustExist(process.env.DB_USER! as string, "DB_USER"),
    password: mustExist(process.env.DB_PASSWORD! as string, "DB_PASSWORD"),
    name: mustExist(process.env.DB_NAME! as string, "DB_NAME"),
    host: mustExist(process.env.DB_HOST! as string, "DB_HOST"),
    dialect: mustExist(process.env.DB_DIALECT! as sequelize.Dialect, 'DB_DIALECT'),
    port: mustExist(parseInt(process.env.DB_PORT!) as number, "DB_PORT"),
    logging: false,
    timezone: 'utc' as string,
  },

  /**
   * Allowed Origins
   */
  corsWhitelist : string[] = mustExist(process.env.CORS_WHITE_LIST!, "CORS_WHITE_LIST").split(','),

  /** Pagination */
  pgMinLimit = 10,
  pgMaxLimit = 100,
  /** Order */
  defaultCursor = 'id',
  defaultSort = SortEnum.asc,
  defaultOrder = "createdAt",

  tokenExpireTime = 2,
  hostUrl = mustExist(process.env.HOST_URL!, "HOST_URL");


export * from './instance';