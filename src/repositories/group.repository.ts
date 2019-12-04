import { Group } from '../entity/group.entity';
import { Repository, EntityRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
export interface GroupRepository{
  setGroup(group: Group);
  getGroup();
  getGroupUser();
  updGroup(id: number, name: string);
  delGroup(id: number);
}
@EntityRepository(Group)
export class GroupRepositoryImpl implements GroupRepository{
  public constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) { }
  async setGroup(group: Group) {
    const result = this.groupRepository.save(group);
    return result;
  }
  async getGroup() {
    const result = this.groupRepository.find();
    return result;
  }
  async getGroupUser() {
    const result = this.groupRepository.find({ relations: ["member"] });
    return result;
  }
  async updGroup(id: number, name: string) {
    const result = this.groupRepository.update(id, { name: name })
    return result;
  }
  async delGroup(id: number) {
    const result = await this.groupRepository.delete({ id: id });
    return result;
  }
}