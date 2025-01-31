import * as Sequelize from 'sequelize';

import { CursorPaginationOrderSearchExtend, ModelTimestampExtend } from '.';
import { UserConfirmationEnum } from '../enums';


export interface InputUserInterface {
  name?: string;
  username?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  password?: string;
  confirmationStatus?: UserConfirmationEnum;
  accountStatus?: boolean;
  accessToken?: string;
}

export interface UserInterface extends ModelTimestampExtend {
  id: Sequelize.CreationOptional<number>;
  name?: string;
  username: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  confirmationStatus: UserConfirmationEnum;
  accountStatus: boolean;
}

export interface InputChangePasswordInterface {
  accessToken: string;
  previousPassword: string;
  proposedPassword: string;
}

export interface InputVerifyOtpInterface {
  attributeName: string;
  confirmationCode: string;
}

export interface InputConfirmIdentityInterface {
  identity: string;
  token: string;
}

export interface InputResendConfirmCodeIdentityInterface {
  identity: string;
  email: string;
}

export interface UserModelInterface
  extends Sequelize.Model<UserInterface, Partial<InputUserInterface>>,
    UserInterface {}

export interface ArgsWorkspaceMembersInterface extends CursorPaginationOrderSearchExtend {
  roleLevelTo?: number;
  roleLevelFrom?: number;
}