import { Group } from "../entity/Group";
import { getRepository } from "typeorm";
import { injectable } from "inversify";
export interface GroupRepoInterface {
  setGroup(group: Group);
  getGroup();
  getGroupUser();
  updGroup(id: number, name: string);
  delGroup(id: number);
}
@injectable()
export class GroupRepo implements GroupRepoInterface {
  groupRepo;
  constructor() {
    this.groupRepo = getRepository(Group);
  }
  async setGroup(group: Group) {
    const result = this.groupRepo.save(group);
    return result;
  }
  async getGroup() {
    const result = this.groupRepo.find();
    return result;
  }
  async getGroupUser() {
    const result = this.groupRepo.find({ relations: ["member"] });
    return result;
  }
  async updGroup(id: number, name: string) {
    const result = this.groupRepo.update(id, { name: name })
    return result;
  }
  async delGroup(id: number) {
    const result = await this.groupRepo.delete({ id: id });
    return result;
  }
}
