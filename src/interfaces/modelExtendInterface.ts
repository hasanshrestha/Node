import * as Sequelize from "sequelize";
import { UserInterface } from ".";
//import { UserWorkspaceInterface } from ".";
//import { WorkspaceExtend, WorkspaceInterface } from ".";


export interface ModelTimestampExtend {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export interface ModelCreatorIdExtend {
  createdById?: Sequelize.CreationOptional<number>;
  updatedById?: Sequelize.CreationOptional<number>;
}

export interface ModelCreatorIncludeExtend extends ModelCreatorIdExtend {
  createdBy: UserInterface;
  updatedBy: UserInterface;
}

// export interface WorkspaceIncludeExtend extends WorkspaceExtend {
//   workspace?: WorkspaceInterface;
// }

// export interface WorkspaceSecretExtend {
//   workspace: string;
// }

// export interface WorkspaceSecretOptionalExtend {
//   workspace?: string;
// }