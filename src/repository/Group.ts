import { Group } from "../entity/Group";
import { getClient } from "../dbs/db";

export class GroupRepo {
  groupRepo;
  constructor() {
    this.groupRepo = getClient().getRepository(Group);
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
  async updGroup(id:number,name:string){
    const result =this.groupRepo.update(id,{ name: name } )
    return result;
  }
  async delGroup(id: number) {
    const result = await this.groupRepo.delete({ id: id });
    return result;
  }
}
