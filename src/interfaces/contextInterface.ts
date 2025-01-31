import { UserInterface } from '.';

//import i18nProvider from "@src/config/i18nProvider";
//type I18nProviderType = typeof i18nProvider;

export interface ContextInterface {
  user: UserInterface | undefined;
  authorization?: string | undefined;
  //i18nProvider: I18nProviderType;
//   userWorkspace: UserWorkspaceInterface | undefined;
//   clientIp: string;
//   deviceId: string;
//   userAgent: string;
//   browser: string | undefined;
//   isMobile: string | undefined;
//   platform: string | undefined;
//   logId: string;
//   timeStamp: Date;
//   accessTokenPayload: CognitoAccessTokenPayload | undefined
}
