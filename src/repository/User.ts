import { User } from "../entity/User";
import { getRepository } from "typeorm";

export class UserRepo {
  userRepo;
  constructor() {
    this.userRepo = getRepository(User);
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
    const result = this.userRepo.update(id, { name: name })
    return result;
  }
  async delUser(id: number) {
    const result = await this.userRepo.delete({ id: id });
    return result;
  }
  /* revert */
  async findHeart() {
    const result = await this.userRepo.find({ relations: ["heart"] });
    return result;
  }
  async findEye() {
    const result = await this.userRepo.find({ relations: ["eye"] });
    return result;
  }
  async findGroup() {
    const result = await this.userRepo.find({ relations: ["group"] });
    return result;
  }
  async findAll(){
    const result = await this.userRepo.find({ relations: ["heart","eye","group"] });
    return result;
  }
}
