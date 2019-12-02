import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
    async setUser(user: User) {
        const result = await this.userRepository.save(user);
        console.log(result);
        return result;
    }
    async getUser() {
        const result = await this.userRepository.find();
        return result;
    }
    async updUser(id: number, name: string) {
        const result = await this.userRepository.update(id, { name: name })
        return result;
    }
    async delUser(id: number) {
        const result = await this.userRepository.delete({ id: id });
        return result;
    }
    /* revert */
    async findHeart() {
        const result = await this.userRepository.find({ relations: ["heart"] });
        return result;
    }
    async findEye() {
        const result = await this.userRepository.find({ relations: ["eye"] });
        return result;
    }
    async findGroup() {
        const result = await this.userRepository.find({ relations: ["group"] });
        return result;
    }
    async findAll() {
        const result = await this.userRepository.find({ relations: ["heart", "eye", "group"] });
        return result;
    }
}
