import { User } from '../../entity/user.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async setUser(user: User) {
    const result = await this.save(user);
    return result;
  }
  async getUser() {
    const result = await this.find();
    return result;
  }
  async updUser(id: number, name: string) {
    const result = await this.update(id, { name: name })
    return result;
  }
  async delUser(id: number) {
    const result = await this.delete({ id: id });
    return result;
  }
  /* revert */
  async findHeart() {
    const result = await this.find({ relations: ["heart"] });
    return result;
  }
  async findEye() {
    const result = await this.find({ relations: ["eye"] });
    return result;
  }
  async findGroup() {
    const result = await this.find({ relations: ["group"] });
    return result;
  }
  async findAll() {
    const result = await this.find({ relations: ["heart", "eye", "group"] });
    return result;
  }
}