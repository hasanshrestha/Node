import * as Sequelize from 'sequelize';

import { Database } from '@src/config';
import { UserConfirmationEnum } from '@src/enums';
import { UserModelInterface } from '@src/interfaces';


const sequelize = Database.sequelize;

const User = sequelize.define<UserModelInterface>(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    emailVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'email_verified',
    },
    phoneNumber: {
      type: Sequelize.STRING,
      field: 'phone_number',
    },
    phoneNumberVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'phone_number_verified',
    },
    confirmationStatus: {
      type: Sequelize.ENUM(
        UserConfirmationEnum.UNCONFIRMED,
        UserConfirmationEnum.CONFIRMED,
        UserConfirmationEnum.ARCHIVED,
        UserConfirmationEnum.COMPROMISED,
        UserConfirmationEnum.UNKNOWN,
        UserConfirmationEnum.RESET_REQUIRED,
        UserConfirmationEnum.FORCE_CHANGE_PASSWORD,
      ),
      allowNull: false,
      defaultValue: UserConfirmationEnum.UNCONFIRMED,
      field: 'confirmation_status',
    },
    accountStatus: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'account_status',
    },
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        name: 'users_email',
        fields: ['email'],
        where: {
          deletedAt: null,
        },
      },
    ],
  },
);

// User.hasMany(UserWorkspace, {
//   foreignKey: 'userId',
//   as: 'userWorkspaces',
// });

// UserWorkspace.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user',
// });

// /* User and Workspace relation */
// Workspace.belongsTo(User, {
//   foreignKey: 'ownerId',
//   as: 'owner',
// });

// User.hasOne(Workspace, {
//   foreignKey: 'ownerId',
//   as: 'ownerWorkspace',
// });

// Workspace.belongsToMany(User, {
//   through: { model: UserWorkspace },
//   as: 'users',
//   foreignKey: 'workspaceId',
//   otherKey: 'userId',
// });

// User.belongsToMany(Workspace, {
//   through: { model: UserWorkspace },
//   as: 'workspaces',
//   foreignKey: 'userId',
//   otherKey: 'workspaceId',
// });


export default User;
