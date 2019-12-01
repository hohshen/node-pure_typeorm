import { User } from "../entity/User";
// import { getRepository } from "typeorm";
import { injectable } from "inversify";
export interface UserRepoInterface {
  setUser(user: User);
  getUser();
  updUser(id: number, name: string);
  delUser(id: number);
  findHeart();
  findEye();
  findGroup();
  findAll();
}

@injectable()
export class UserRepo implements UserRepoInterface {

  userRepo;
  constructor() {
    // this.userRepo = getRepository(User);
  }
  async setUser(user: User) {
    const result = this.userRepo.save(user);
    return result;
  }
  async getUser() {
    const result = this.userRepo.find();
    return result;
  }
  async updUser(id: number, name: string) {
    //const result = this.userRepo.update(id, { name: name })
    const result = { a: "123" };
    return result;
  }
  async delUser(id: number) {
    // const result = await this.userRepo.delete({ id: id });
    const result = { a: "123" };
    return result;
  }
  /* revert */
  async findHeart() {
    // const result = await this.userRepo.find({ relations: ["heart"] });
    const result = { a: "123" };
    return result;
  }
  async findEye() {
    // const result = await this.userRepo.find({ relations: ["eye"] });
    const result = { a: "123" };
    return result;
  }
  async findGroup() {
    // const result = await this.userRepo.find({ relations: ["group"] });
    const result = { a: "123" };
    return result;
  }
  async findAll() {
    // const result = await this.userRepo.find({ relations: ["heart", "eye", "group"] });
    const result = { a: "123" };
    return result;
  }
}
