import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Eye } from '../../entity/eye.entity';

@Injectable()
export class EyeService {
    constructor(
        @InjectRepository(Eye)
        private readonly eyeRepository: Repository<Eye>,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
    async setEye(eye: Eye) {
        const result = this.eyeRepository.save(eye);
        return result;
    }
    async getEye() {
        const result = this.eyeRepository.find();
        return result;
    }
    async getEyeUser() {
        const result = this.eyeRepository.find({ relations: ["user"] });
        return result;
    }
    async updEye(id: number, name: string) {
        const result = this.eyeRepository.update(id, { name: name })
        return result;
    }
    async delEye(id: number) {
        const result = await this.eyeRepository.delete({ id: id });
        return result;
    }
}
