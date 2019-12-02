import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Heart } from '../../entity/heart.entity';
@Injectable()
export class HeartService {
    constructor(
        @InjectRepository(Heart)
        private readonly heartRepository: Repository<Heart>,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
    async setHeart(heart: Heart) {
        const result = this.heartRepository.save(heart);
        return result;
    }
    async getHeart() {
        const result = this.heartRepository.find();
        return result;
    }
    async getHeartUser() {
        const result = this.heartRepository.find({ relations: ["user"] });
        return result;
    }
    async updHeart(id: number, name: string) {
        const result = this.heartRepository.update(id, { name: name })
        return result;
    }
    async delHeart(id: number) {
        const result = await this.heartRepository.delete({ id: id });
        return result;
    }
}
