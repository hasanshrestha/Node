'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      phone_number_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      confirmation_status: {
        type: DataTypes.ENUM('UNCONFIRMED', 'CONFIRMED', 'ARCHIVED', 'COMPROMISED', 'UNKNOWN', 'RESET_REQUIRED', 'FORCE_CHANGE_PASSWORD'),
        allowNull: false,
        defaultValue: 'UNCONFIRMED',
      },
      account_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    });

    await queryInterface.addIndex('users', ['email'], {
      concurrently: true,
      unique: true,
      type: 'UNIQUE',
      name: 'users_email',
      where: {
        deleted_at: null,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /* dependency */
    await queryInterface.removeIndex('users', 'email');
    await queryInterface.dropTable('users');
  },
};
