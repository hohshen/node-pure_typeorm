import { Group } from '../../entity/group.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Group)
export class GroupRepository extends Repository<Group>{
  async setGroup(group: Group) {
    const result = this.save(group);
    return result;
  }
  async getGroup() {
    const result = this.find();
    return result;
  }
  async getGroupUser() {
    const result = this.find({ relations: ["member"] });
    return result;
  }
  async updGroup(id: number, name: string) {
    const result = this.update(id, { name: name })
    return result;
  }
  async delGroup(id: number) {
    const result = await this.delete({ id: id });
    return result;
  }
}