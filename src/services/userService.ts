import * as Sequelize from "sequelize";
import { WhereOptions } from "sequelize";

import { InputUserInterface, UserInterface } from "@src/interfaces";
import { UserRepository } from "@src/repositories";


export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async create(input: InputUserInterface): Promise<UserInterface> {
    if (input.email) {
      const emailExists = await this.repository.findOne({
        where: { email: input.email.trim() },
      });
      if (emailExists)
        throw new Error(`Email already exists!`);
    }

    return this.repository.create(input);
  }

  findOne({
    email
  }: {
    email?: string;
  }): Promise<UserInterface> {
    let where: WhereOptions<any> = {};
    if (email) {
      where = { ...where, email: email };
    }
    return this.repository.findOne({
      where,
    });
  }

  async findByPk(id: number): Promise<UserInterface> {
    const userExists = await this.repository.findByPk(id);
    if (!userExists) throw new Error(`User does not exist!`);
    return userExists;
  }

  async updateOne(
    id: Sequelize.CreationOptional<number>,
    input: Partial<InputUserInterface>
  ): Promise<UserInterface> {
    const userExists = await this.repository.findByPk(id);
    if (!userExists) throw new Error(`User does not exist!`);

    if (input.email) {
      const emailExists = await this.repository.findOne({
        where: { email: input.email.trim() },
      });
      if (emailExists && emailExists.id !== id)
        throw new Error(`Email already exists!`);
    }

    await this.repository.updateOne({
      id: id,
      input: input,
    });

    return this.findByPk(id);
  }
}