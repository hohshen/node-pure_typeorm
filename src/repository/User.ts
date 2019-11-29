import { User } from "../entity/User";
import { getRepository } from "typeorm";

export class UserRepo {
  getUser() {
    return getRepository(User).find();
  }
  saveUser(user: User) {
    return getRepository(User).save(user);
  }
}