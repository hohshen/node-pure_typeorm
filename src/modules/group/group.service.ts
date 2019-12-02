import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../../entity/group.entity';
@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(Group)
        private readonly groupRepository: Repository<Group>,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
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
